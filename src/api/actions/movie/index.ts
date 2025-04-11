import axiosQuery from '../../../../lib/axiosQuery';
import {Movie} from '../../../features/movie/types';
import {SearchResults} from './types';

export const fetchTrendingMovies = (page: number): Promise<SearchResults> =>
  axiosQuery('get', '/trending/movie/day', {params: {page}}, true);

export const searchMovies = (query: string, page: number): Promise<SearchResults> =>
  axiosQuery('get', '/search/movie', {params: {query, page}});

export const fetchMovieDetails = (movieId: string): Promise<Movie> =>
  axiosQuery('get', `/movie/${movieId}`);
