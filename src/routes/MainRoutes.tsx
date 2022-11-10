import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PrivateRoute } from "./PrivateRoutes"
import { Layout } from "../layouts/Layout"
import {
  FAVORITE_LIST,
  HOME,
  LOGIN,
  MOVIES,
  MOVIE_SEARCH,
  NOT_FOUND,
  REGISTER,
  TRENDS,
} from "../costants/routes"
import {
  FavoriteList,
  FilmIdPage,
  LoginPage,
  MoviesPage,
  NotFound,
  RegisterPage,
  SearchMovie,
  TrendMovie,
} from "../pages"


export const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME} element={<Layout />}>
          <Route index element={<MoviesPage/>}/>
          <Route path={MOVIE_SEARCH} element={<SearchMovie />} />
          <Route path={`${MOVIES}/:filmId`} element={<FilmIdPage />} />
          <Route path={TRENDS} element={<TrendMovie />} />
          <Route path={FAVORITE_LIST} element={<PrivateRoute><FavoriteList/></PrivateRoute>}/>
        </Route>
        <Route path={LOGIN} element={<LoginPage />} />
        <Route path={REGISTER} element={<RegisterPage />} />
        <Route path={NOT_FOUND} element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}
