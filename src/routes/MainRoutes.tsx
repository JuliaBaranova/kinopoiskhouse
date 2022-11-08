import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  FAVORITE_LIST,
  HOME,
  LOGIN,
  MOVIES,
  MOVIE_SEARCH,
  REGISTER,
  TRENDS,
} from "../costants/routes";
import { Layout } from "../layouts/Layout";
import {
  FavoriteList,
  FilmIdPage,
  LoginPage,
  MoviesPage,
  RegisterPage,
  SearchMovie,
  TrendMovie,
} from "../pages";

export const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME} element={<Layout />}>
          <Route index element={<MoviesPage />}/>
          <Route path={MOVIE_SEARCH} element={<SearchMovie />} />
          <Route path={`${MOVIES}/:filmId`} element={<FilmIdPage />} />
          <Route path={TRENDS} element={<TrendMovie />} />
          <Route path={FAVORITE_LIST} element={<FavoriteList/>}/>
        </Route>
        <Route path={LOGIN} element={<LoginPage />} />
        <Route path={REGISTER} element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
};
