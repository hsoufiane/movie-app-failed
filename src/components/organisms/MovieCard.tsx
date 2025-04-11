import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {FaStar} from 'react-icons/fa';
import Icon from '../atoms/Icon';
import {AdaptedMovie} from '../../features/movie/types';

export interface MovieCardProps {
  movie: AdaptedMovie;
}

const MovieCard: React.FC<MovieCardProps> = ({movie}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="block w-full h-full">
      <div className="bg-white rounded-lg shadow-sm hover:shadow-xl overflow-hidden transition-all duration-300 group h-full flex flex-col">
        <div className="relative aspect-[2/3] overflow-hidden rounded-t-lg flex-grow">
          <div
            className={`absolute inset-0 bg-gray-200 transition-opacity duration-300 ${
              imageLoaded ? 'opacity-0' : 'opacity-100'
            }`}></div>
          <Image
            src={movie.posterUrl}
            alt={movie.title}
            layout="fill"
            objectFit="cover"
            className={`transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            } group-hover:scale-105 transition-transform duration-300`}
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
            onLoad={() => setImageLoaded(true)}
          />
          {movie.voteAverage && (
            <div className="absolute top-2 right-2 inline-flex items-center gap-1 bg-black/50 text-white px-2 py-1 rounded-full text-xs md:text-sm font-medium backdrop-blur-sm">
              <Icon icon={FaStar} className="w-3 h-3 md:w-4 md:h-4 text-yellow-500" />
              <span>{movie.voteAverage}</span>
            </div>
          )}
        </div>
        <div className="p-3 md:p-4">
          <h2 className="font-semibold text-sm md:text-base lg:text-lg truncate text-gray-900 mb-1">
            {movie.title}
          </h2>
          <p className="text-xs md:text-sm text-gray-500">{movie.releaseYear}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
