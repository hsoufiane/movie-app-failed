import {TMDB_IMAGE_BASE_URL_SMALL} from '../../../../api/config';
import {AdaptedMovie, Movie} from '../../types';

export const adaptMoviesData = (movies: Movie[]): AdaptedMovie[] => {
  return movies.map(movie => ({
    id: movie.id,
    title: movie.title,
    posterUrl: `${TMDB_IMAGE_BASE_URL_SMALL}${movie.poster_path}`,
    voteAverage: `${movie.vote_average.toFixed(1)}`,
    releaseYear: new Date(movie.release_date).getFullYear().toString(),
  }));
};
