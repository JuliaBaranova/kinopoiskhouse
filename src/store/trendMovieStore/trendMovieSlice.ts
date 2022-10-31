import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {ITrend} from "../../types/trendMovie"
import {MOVIE_TREND} from "../../costants/endpoints"

interface ITrendMovieSliceInitialState {
    isLoading: boolean;
    trend: ITrend[];
    error: any;
  }
  const initialState: ITrendMovieSliceInitialState = {
    isLoading: false,
    trend: [],
    error: null,
  };
  export const getMovieTopAsync = createAsyncThunk(
    "trend/getMoviesTopAsync",
    async ({currentPage}:{currentPage: number}, { rejectWithValue }) => {
      try {
        const response = await fetch(`${MOVIE_TREND}&page=${currentPage}`, {
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
  const movieTrendSlice = createSlice({
    name: "trend",
    initialState,
    reducers: {},
    extraReducers: {
      [getMovieTopAsync.pending.type]: (state) => {
        state.isLoading = true;
      },   
      [getMovieTopAsync.fulfilled.type]: (state, action) => {
        state.isLoading = false;
        state.trend = action.payload;
      },
      [getMovieTopAsync.rejected.type]: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      },
    },
  });
  
  export default movieTrendSlice.reducer;
  