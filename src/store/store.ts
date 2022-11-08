import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authSlice from "./authStore/authSlice";
import movieTopSlice from "./movieStore/movieSlice";
import trendMovieSlice from "./trendMovieStore/trendMovieSlice";

const rootReducer = combineReducers({
 movie: movieTopSlice,
 trend: trendMovieSlice,
 auth: authSlice

});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type AppDispatchType = typeof store.dispatch;
export type AppStateType = ReturnType<typeof rootReducer>;