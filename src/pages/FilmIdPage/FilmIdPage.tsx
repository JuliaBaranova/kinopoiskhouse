import { useStore } from "../../hooks/useStore/useStore"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { v4 as uuidv4 } from "uuid"
import { FilmItem } from "../../components/FilmItem"
import {
  getMovieDetailAsync,
  getMoviesRecAsync,
  getStaffAsync,
} from "../../store/movieStore/movieReducers"
import { Spinner } from "../../components/Spinner"
import { StaffItem } from "../../components/StaffItem"
import { MoviesRecommend } from "../../components/MoviesRecommend"
import { BackStep } from "../../components/BackStep"
import { ErrorMessage } from "../../components/ErrorMessage"

export const FilmIdPage = () => {
  const { filmId } = useParams() as any
  const { dispatch, store } = useStore()
  const { staff, movieDetail, moviesRec, isLoading, error } = store.movie

  useEffect(() => {
    dispatch(getMovieDetailAsync(filmId));
  }, [filmId, dispatch])

  useEffect(() => {
    dispatch(getStaffAsync(filmId))
  }, [filmId, dispatch])

  useEffect(() => {
    dispatch(getMoviesRecAsync(filmId))
  }, [filmId, dispatch])

  if (isLoading) {
    return <Spinner />
  } else if (error) {
    return <ErrorMessage />
  }

  return (
    <div className="flex flex-col gap-5 mx-[20.5rem] mt-24">
      <BackStep />
      <div>
        {movieDetail ? (
          <FilmItem
            key={uuidv4()}
            kinopoiskId={movieDetail.kinopoiskId}
            ratingKinopoisk={movieDetail.ratingKinopoisk}
            ratingImdb={movieDetail.ratingImdb}
            nameRu={movieDetail.nameRu}
            description={movieDetail.description}
            year={movieDetail.year}
            posterUrl={movieDetail.posterUrl}
            countries={movieDetail.countries}
            genres={movieDetail.genres}
          />
        ) : (
          <div>No data yet :</div>
        )}
      </div>
      <div className="grid grid-cols-2 gap-8  md:grid-cols-6 w-8/12  h-auto ml-52">
        {Array.isArray(staff)
          ? staff
              .slice(0, 12)
              .map(({ staffId, nameRu, posterUrl, professionKey }) => (
                <StaffItem
                  key={uuidv4()}
                  staffId={staffId}
                  posterUrl={posterUrl}
                  nameRu={nameRu}
                  professionKey={professionKey}
                />
              ))
          : null}
      </div>
      <div className="flex flex-col gap-5 ml-52 mt-10">
        <p className="font-exo text-xl font-semibold">Recommendations</p>
        <div className="grid grid-cols-2 gap-8  md:grid-cols-4 w-10/12  h-auto">
          {Array.isArray(moviesRec)
            ? moviesRec
                .slice(0, 4)
                .map(({ filmId, nameRu, posterUrlPreview }) => (
                  <MoviesRecommend
                    key={uuidv4()}
                    filmId={filmId}
                    posterUrlPreview={posterUrlPreview}
                    nameRu={nameRu}
                  />
                ))
            : null}
        </div>
      </div>
    </div>
  )
}
