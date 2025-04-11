import {useState, useEffect, useCallback} from 'react';
import {useQuery} from '@tanstack/react-query';
import {searchMovies} from '../../../api/actions/movie';
import {SearchResults} from '../../../api/actions/movie/types';
import {Movie} from '../types';
import {DEBOUNCE_TIME, MAX_PAGES, QUERY_KEYS} from './constants';

export const useSearchMovies = (query: string) => {
  const [page, setPage] = useState(1);
  const [allMovies, setAllMovies] = useState<Movie[]>([]);
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(query), DEBOUNCE_TIME);
    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    setPage(1);
    setAllMovies([]);
  }, [debouncedQuery]);

  const {data, isLoading, isFetching, error} = useQuery<SearchResults>({
    queryKey: [QUERY_KEYS.SEARCH_MOVIES, debouncedQuery, page],
    queryFn: () => searchMovies(debouncedQuery, page),
    enabled: !!debouncedQuery,
  });

  useEffect(() => {
    if (data?.results) {
      const newMovies = data.results;
      setAllMovies(prevMovies => (page === 1 ? newMovies : [...prevMovies, ...newMovies]));
    }
  }, [data, page, debouncedQuery]);

  const loadMore = useCallback(() => {
    setPage(prevPage => (prevPage < MAX_PAGES ? prevPage + 1 : prevPage));
  }, []);

  return {
    movies: allMovies,
    isLoading,
    isFetching,
    error,
    loadMore,
    hasMore: data ? page < Math.min(data.total_pages, MAX_PAGES) : false,
  };
};
