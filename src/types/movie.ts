export interface IMovie {
  filmId: number;
  kinopoiskId: number;
  ratingKinopoisk: number;
  nameRu: string;
  genres: Array<{ genre: string }>;
  posterUrlPreview: string;
  rating: number,
}
