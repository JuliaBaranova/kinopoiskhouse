import { createAsyncThunk } from "@reduxjs/toolkit"
import { publicAxios } from "../../utils/axios"
import { MOVIES, SEARCH, MOVIES_STAFF } from "../../costants/endpoints"

export const getMoviesAsync = createAsyncThunk(
  "movie/getMovieAsync",
  async (
    { order, currentPage }: { order: string; currentPage: number },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await publicAxios.get(
        `${MOVIES}${
          order ? `?order=${order}&type=ALL&page=${currentPage}` : ""
        } `
      );
      return data.items;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
)

export const getMovieSearchAsync = createAsyncThunk(
  "movies/getMovieSearchAsync",
  async ({ search }: { search: string }, { rejectWithValue }) => {
    try {
      const { data } = await publicAxios.get(
        `${SEARCH}?keyword=${search}&page=1`
      );
      return data.films;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
)

export const getMovieDetailAsync = createAsyncThunk(
  "movies/MovieDetailAsync",
  async (filmId: number, { rejectWithValue }) => {
    try {
      const { data } = await publicAxios.get(`${MOVIES}/${filmId}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
)

export const getStaffAsync = createAsyncThunk(
  "movies/getStaffAsync",
  async (filmId: number, { rejectWithValue }) => {
    try {
      const { data } = await publicAxios.get(`${MOVIES_STAFF}${filmId}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
)

export const getMoviesRecAsync = createAsyncThunk(
  "movies/getMoviesRecAsync",
  async (filmId: number, { rejectWithValue }) => {
    try {
      const { data } = await publicAxios.get(`${MOVIES}/${filmId}/similars`);
      return data.items;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
)
