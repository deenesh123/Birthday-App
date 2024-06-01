import React from 'react';
import { Birthday } from '../models/Birthday';

interface BirthdayCardProps {
  birthday: Birthday;
  onFavouriteToggle: (birthday: Birthday) => void;
}

const BirthdayCard: React.FC<BirthdayCardProps> = ({
  birthday,
  onFavouriteToggle,
}) => {
  // ... render the card with name, profession, and favourite toggle button
};

export default BirthdayCard;
