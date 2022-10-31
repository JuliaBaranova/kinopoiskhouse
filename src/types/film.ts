export interface IFilm {
    kinopoiskId: number;
    ratingKinopoisk: number;
    ratingImdb: number;
    nameRu: string;
    description:string;
    year: string;
    genres: Array<{genre: string}>;
    countries: Array<{country: string}>;
    posterUrl: string;
}