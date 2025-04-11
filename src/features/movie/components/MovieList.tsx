import React from 'react';
import {AdaptedMovie} from '../types';
import MovieCard from '../../../components/organisms/MovieCard';
import {withInfiniteScroll} from '../../../hoc/withInfiniteScroll';

interface MovieListProps {
  movies: AdaptedMovie[];
  isLoading: boolean;
  isFetching: boolean;
  hasMore: boolean;
  loadMore: () => void;
  lastItemRef?: (node: HTMLDivElement | null) => void;
}

const MovieList: React.FC<MovieListProps> = ({
  movies,
  isLoading,
  isFetching,
  hasMore,
  lastItemRef,
}) => {
  return (
    <div className="container mx-auto px-4 space-y-8">
      <h2 className="text-2xl font-bold text-gray-900">Films tendance</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
        {movies.map((movie, index) => (
          <div
            key={`${movie.id}-${index}`}
            ref={index === movies.length - 1 ? lastItemRef : null}
            className="w-full">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
      {(isLoading || isFetching) && (
        <div className="flex justify-center py-8">
          <div className="animate-pulse text-center text-gray-500">Chargement...</div>
        </div>
      )}
      {!hasMore && !isLoading && !isFetching && movies.length > 0 && (
        <div className="text-center py-8 text-gray-600">
          Vous avez atteint la fin de la liste des films.
        </div>
      )}
    </div>
  );
};

export default withInfiniteScroll(MovieList);
