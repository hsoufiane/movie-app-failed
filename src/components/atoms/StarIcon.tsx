import React from 'react';
import {FaStar} from 'react-icons/fa';

export interface StarIconProps {
  rating: number;
  votes?: number;
  className?: string;
}

const StarIcon: React.FC<StarIconProps> = ({rating, votes, className = ''}) => {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <FaStar className="text-primary w-5 h-5" />
      <span className="font-bold">{rating.toFixed(1)}</span>
      {votes !== undefined && <span className="text-gray-600 text-sm">({votes} votes)</span>}
    </div>
  );
};

export default StarIcon;
