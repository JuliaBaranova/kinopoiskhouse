import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { MOVIES, SEARCH, MOVIES_STAFF } from "../../costants/endpoints";
import { IMovie } from "../../types/movie";
import { IFilm } from "../../types/film";
import { IStaff } from "../../types/staffmovie";

interface IMovieSliceInitialState {
  isLoading: boolean;
  movies: IMovie[];
  movieDetail: IFilm | null;
  staff: IStaff[];
  error: any;
}
interface IMovieParams<T = number> {
  page?: T;
  order?: string;
}

export const getMoviesAsync = createAsyncThunk(
  "movie/initMovieAsync",
  async (
    { order, currentPage }: { order: string; currentPage: number },
    { rejectWithValue }
  ) => {
    try {
      const response = await fetch(
        `${MOVIES}${
          order ? `?order=${order}&type=ALL&page=${currentPage}` : ""
        } `,
        {
          method: "GET",
          headers: {
            "X-API-KEY": "98bd6b7a-6688-4ee8-a75d-9141521969df",
            "Content-Type": "application/json",
          },
        }
      ).then((res) => res.json());
      return response.items;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const getMovieSearchAsync = createAsyncThunk(
  "movies/getMovieSearchAsync",
  async ({ search }: { search: IMovieParams }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${SEARCH}?keyword=${search}&page=1`, {
        method: "GET",
        headers: {
          "X-API-KEY": "98bd6b7a-6688-4ee8-a75d-9141521969df",
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());
      return response.films;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getMovieDetailAsync = createAsyncThunk(
  "movies/MovieDetailAsync",
  async (filmId: number, { rejectWithValue }) => {
    try {
      const response = await fetch(`${MOVIES}/${filmId}`, {
        method: "GET",
        headers: {
          "X-API-KEY": "98bd6b7a-6688-4ee8-a75d-9141521969df",
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const getStaffAsync = createAsyncThunk(
  "movies/MovieDetailAsync",
  async (filmId: number, { rejectWithValue }) => {
    try {
      const response = await fetch(`${MOVIES_STAFF}${filmId}`, {
        method: "GET",
        headers: {
          "X-API-KEY": "98bd6b7a-6688-4ee8-a75d-9141521969df",
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState: IMovieSliceInitialState = {
  isLoading: false,
  movies: [],
  movieDetail: null,
  staff: [],
  error: null,
};


const movieTopSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: {
    [getMoviesAsync.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getMoviesAsync.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.movies = action.payload;
    },
    [getMoviesAsync.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getMovieDetailAsync.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getMovieDetailAsync.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.movieDetail = action.payload;
    },
    [getMovieDetailAsync.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getMovieSearchAsync.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getMovieSearchAsync.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.movies = action.payload;
    },
    [getMovieSearchAsync.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getStaffAsync.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getStaffAsync.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.staff = action.payload;
    },
    [getStaffAsync.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default movieTopSlice.reducer;
