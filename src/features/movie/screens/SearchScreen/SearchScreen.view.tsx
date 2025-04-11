import React, {useState} from 'react';
import {SearchScreenScene} from './SearchScreen.scene';
import {useMovies, useSearchMovies} from '../../hooks';
import {adaptMoviesData} from './SearchScreen.adapter';

export const SearchScreenView: React.FC = () => {
  const [query, setQuery] = useState('');

  const {
    movies: trendingMovies,
    isLoading: isTrendingLoading,
    isFetching: isTrendingFetching,
    loadMore: loadMoreTrending,
    hasMore: hasTrendingMore,
  } = useMovies();

  const {
    movies: searchResults,
    isLoading: isSearchLoading,
    isFetching: isSearchFetching,
    loadMore: loadMoreSearch,
    hasMore: hasSearchMore,
  } = useSearchMovies(query);

  const handleSearch = (value: string) => {
    setQuery(value);
  };

  const clearSearch = () => {
    setQuery('');
  };

  const isSearchActive = query.length > 0;
  const movies = isSearchActive ? searchResults : trendingMovies;
  const isLoading = isSearchActive ? isSearchLoading : isTrendingLoading;
  const isFetching = isSearchActive ? isSearchFetching : isTrendingFetching;
  const loadMore = isSearchActive ? loadMoreSearch : loadMoreTrending;
  const hasMore = isSearchActive ? hasSearchMore : hasTrendingMore;

  const adaptedMovies = adaptMoviesData(movies);

  return (
    <SearchScreenScene
      query={query}
      onSearch={handleSearch}
      onClearSearch={clearSearch}
      movies={adaptedMovies}
      isLoading={isLoading}
      isFetching={isFetching}
      hasMore={hasMore}
      loadMore={loadMore}
    />
  );
};
