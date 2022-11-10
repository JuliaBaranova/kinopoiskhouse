import { MovieItem } from "../../components/MovieItem"
import { useStore } from "../../hooks/useStore/useStore"
import { getMovieDetailAsync } from "../../store/movieStore/movieReducers"
import { v4 as uuidv4 } from "uuid"
import { useEffect, useState } from "react"
import { Spinner } from "../../components/Spinner"
import { ErrorMessage } from "../../components/ErrorMessage"
import { IFilm } from "../../types/film"

export const FavoriteList = () => {
  const data = JSON.parse(localStorage.getItem("favorites") || "[]")
  const { dispatch, store } = useStore()
  const { movieDetail, isLoading, error } = store.movie
  const [movies, setMovies] = useState<IFilm[]>([])

  useEffect(() => {
    data.forEach((filmId: number) => {
      dispatch(getMovieDetailAsync(filmId));
    });
  }, [dispatch])

  useEffect(() => {
    if (
      movieDetail &&
      !movies.find(
        (movie: IFilm) => movie.kinopoiskId === movieDetail.kinopoiskId
      )
    ) {
      setMovies([...movies, movieDetail]);
    }
  }, [movieDetail])

  if (isLoading) {
    return <Spinner />
  } else if (error) {
    return <ErrorMessage />
  }
  return (
    <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 lg:w-9/12  md:grid-cols-2 md:w-7/12 sm:grid-cols-1 sm:w-5/12 mx-[21.5rem] mt-10">
      {movies.length === 0 ? (
        <div>No favorites movies</div>
      ) : (
        movies.map((movie) => (
          <MovieItem
            key={uuidv4()}
            filmId={movie.kinopoiskId}
            kinopoiskId={movie.kinopoiskId}
            ratingKinopoisk={movie.ratingKinopoisk}
            rating={movie.ratingKinopoisk}
            nameRu={movie.nameRu}
            posterUrlPreview={movie.posterUrl}
            genres={movie.genres}
          />
        ))
      )}
    </div>
  )
}
