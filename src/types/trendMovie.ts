export interface ITrend {
    filmId: number;
    rating: number;
    nameRu: string;
    genres: Array<{genre: string}>;
    posterUrlPreview: string;
}