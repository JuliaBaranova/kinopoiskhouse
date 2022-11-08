import { createSlice } from "@reduxjs/toolkit";

import {getMoviesAsync, getMovieDetailAsync, getStaffAsync, getMovieSearchAsync, getMoviesRecAsync} from "./movieReducers"
import { IMovie } from "../../types/movie";
import { IFilm } from "../../types/film";
import { IStaff } from "../../types/staffmovie";
import { IRecommend } from "../../types/moviesrec";
interface IMovieSliceInitialState {
  isLoading: boolean;
  movies: IMovie[];
  movieDetail: IFilm | null;
  staff: IStaff[];
  moviesRec: IRecommend[];
  error: any;
}

const initialState: IMovieSliceInitialState = {
  isLoading: false,
  movies: [],
  movieDetail: null,
  staff: [],
  moviesRec: [],
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
    [getMoviesRecAsync.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getMoviesRecAsync.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.moviesRec = action.payload;
    },
    [getMoviesRecAsync.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default movieTopSlice.reducer;
