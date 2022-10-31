import { BrowserRouter, Route, Routes } from "react-router-dom";

import { FAVORITE, HOME, MOVIES, MOVIE_SEARCH, TRENDS } from "../costants/routes";
import { Layout } from "../layouts/Layout";
import {FavoritesMoviePage, FilmIdPage, MoviesPage, SearchMovie, TrendMovie } from "../pages"


export const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME} element={<Layout />}>
        <Route index element={<MoviesPage />}></Route>
        <Route path={`${MOVIES}/:filmId`} element={<FilmIdPage />} />
        <Route path={MOVIE_SEARCH} element={<SearchMovie/>} />
        <Route path={TRENDS} element={<TrendMovie/>} />
        <Route path={FAVORITE} element={<FavoritesMoviePage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
