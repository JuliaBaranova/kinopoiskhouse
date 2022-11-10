import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { ITrend } from "../../types/trendMovie"
import { MOVIE_TREND } from "../../costants/endpoints"
import { publicAxios } from "../../utils/axios"

interface ITrendMovieSliceInitialState {
  isLoading: boolean;
  trend: ITrend[];
  error: any;
}

const initialState: ITrendMovieSliceInitialState = {
  isLoading: false,
  trend: [],
  error: null,
}

export const getMovieTopAsync = createAsyncThunk(
  "trend/getMoviesTopAsync",
  async ({ currentPage }: { currentPage: number }, { rejectWithValue }) => {
    try {
      const { data } = await publicAxios.get(
        `${MOVIE_TREND}&page=${currentPage}`
      );
      return data.films;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
)

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
})

export default movieTrendSlice.reducer
