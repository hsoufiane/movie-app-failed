import React from 'react';
import SearchInput from '../../../../components/molecules/SearchInput';
import MovieList from '../../components/MovieList';
import {AdaptedMovie} from '../../types';

interface SearchScreenSceneProps {
  query: string;
  onSearch: (value: string) => void;
  onClearSearch: () => void;
  movies: AdaptedMovie[];
  isLoading: boolean;
  isFetching: boolean;
  hasMore: boolean;
  loadMore: () => void;
}

export const SearchScreenScene: React.FC<SearchScreenSceneProps> = ({
  query,
  onSearch,
  onClearSearch,
  movies,
  isLoading,
  isFetching,
  hasMore,
  loadMore,
}) => {
  return (
    <main className="flex-grow">
      <div className="py-20 space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">Découvrez vos films préférés</h1>
          <p className="text-xl text-gray-600">
            Recherchez et explorez une vaste collection de films
          </p>
        </div>
        <div className="py-12">
          <SearchInput value={query} onChange={onSearch} onClear={onClearSearch} />
        </div>
        <MovieList
          movies={movies}
          isLoading={isLoading}
          isFetching={isFetching}
          hasMore={hasMore}
          loadMore={loadMore}
        />
      </div>
    </main>
  );
};
