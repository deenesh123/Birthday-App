import React, { useState, useEffect } from 'react';
import Calendar from '../components/Calendar';
import birthdays from '../data/birthdays';
import BirthdayCard from '../components/BirthdayCard';
import { isSameDay } from '../utils/dateUtils';

const Home: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<Date | null>(null);
  const [favouriteBirthdays, setFavouriteBirthdays] = useState<
    Birthday[]
  >([]);

  useEffect(() => {
    const favs = birthdays.filter((b) => b.isFavourite);
    setFavouriteBirthdays(favs);
  }, []);

  const handleDayClick = (date: Date) => {
    setSelectedDay(date);
  };

  const handleFavouriteToggle = (birthday: Birthday) => {
    const updatedBirthdays = [...birthdays];
    const index = updatedBirthdays.findIndex(
      (b) => b.name === birthday.name
    );
    if (index !== -1) {
      updatedBirthdays[index].isFavourite = !updatedBirthdays[index]
        .isFavourite;
      setFavouriteBirthdays(
        updatedBirthdays.filter((b) => b.isFavourite)
      );
    }
  };

  return (
    <div>
      <Calendar
        year={2023}
        month={1} // February
        selectedDay={selectedDay}
        onDayClick={handleDayClick}
      />

      {/* Display birthdays for the selected day */}
      {selectedDay && (
        <div>
          <h2>Birthdays on {selectedDay.toDateString()}</h2>
          {birthdays
            .filter((b) => isSameDay(b.date, selectedDay))
            .map((birthday) => (
              <BirthdayCard
                key={birthday.name}
                birthday={birthday}
                onFavouriteToggle={handleFavouriteToggle}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default Home;
