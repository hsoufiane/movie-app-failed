export interface Movie {
  backdrop_path: string | null;
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string | null;
  media_type: string;
  adult: boolean;
  original_language: string;
  genres: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface BaseAdaptedMovie {
  id: number;
  title: string;
  posterUrl: string;
  voteAverage: string;
}

export interface AdaptedMovie extends BaseAdaptedMovie {
  releaseYear: string;
}

export interface AdaptedMovieDetails extends BaseAdaptedMovie {
  releaseDate: string;
  voteCount: number;
  overview: string;
  genres: string[];
}
