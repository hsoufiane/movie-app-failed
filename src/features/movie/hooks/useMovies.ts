import {useState, useEffect, useCallback} from 'react';
import {useQuery} from '@tanstack/react-query';
import {fetchTrendingMovies} from '../../../api/actions/movie';
import {SearchResults} from '../../../api/actions/movie/types';
import {Movie} from '../types';
import {MAX_PAGES, QUERY_KEYS} from './constants';

export const useMovies = () => {
  const [page, setPage] = useState(1);
  const [allMovies, setAllMovies] = useState<Movie[]>([]);

  const {data, isLoading, isFetching, error} = useQuery<SearchResults>({
    queryKey: [QUERY_KEYS.TRENDING_MOVIES, page],
    queryFn: () => fetchTrendingMovies(page),
  });

  useEffect(() => {
    if (data?.results) {
      const newMovies = data.results;
      setAllMovies(prevMovies => [...prevMovies, ...newMovies]);
    }
  }, [data, page]);

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
