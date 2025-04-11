import {Movie} from '../../../features/movie/types';

export interface SearchResults {
  results: Movie[];
  page: number;
  total_pages: number;
}
