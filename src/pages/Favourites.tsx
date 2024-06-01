import React from 'react';
import FavouriteBirthdaysList from '../components/FavouriteBirthdaysList';
import birthdays from '../data/birthdays';

const Favourites: React.FC = () => {
  const favouriteBirthdays = birthdays.filter((b) => b.isFavourite);

  const handleFavouriteToggle = (birthday: Birthday) => {
    // ... same logic as in Home page to toggle favourite status
  };

  return (
    <div>
      <h2>Favourite Birthdays</h2>
      <FavouriteBirthdaysList
        favouriteBirthdays={favouriteBirthdays}
        onFavouriteToggle={handleFavouriteToggle}
      />
    </div>
  );
};

export default Favourites;
