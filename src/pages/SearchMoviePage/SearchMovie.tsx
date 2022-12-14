import { useStore } from "../../hooks/useStore/useStore"
import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"
import { MovieItem } from "../../components/MovieItem"
import { Spinner } from "../../components/Spinner"
import { getMovieSearchAsync } from "../../store/movieStore/movieReducers"
import { ErrorMessage } from "../../components/ErrorMessage"

export const SearchMovie = () => {
  const { dispatch, store } = useStore()
  const { movies, isLoading, error } = store.movie
  const [params] = useSearchParams()
  const searchValue: any = params.get("value")

  useEffect(() => {
    dispatch(getMovieSearchAsync({ search: searchValue }))
  }, [dispatch, searchValue])

  if (isLoading) {
    return <Spinner />
  }
  if (error) {
    return <ErrorMessage />;
  } else if (movies.length === 0) {
    return (
      <div className="mb-5 font-exo text-3xl mx-96 mt-24 font-semibold">
        <p>Search results ‘{searchValue}’</p>
        <img
          className="flex justify-center w-4/12 items-center fixed m-auto top-0 left-0 bottom-0 right-0"
          src="https://cdn.dribbble.com/users/1883357/screenshots/6016190/search_no_result.png"
          alt="noresults"
        />
      </div>
    )
  }

  return (
    <div>
      <div className="mb-5 font-exo text-3xl mx-[20.5rem] mt-20 font-semibold">
        {`Search results ${searchValue}`}
      </div>
      <div className="grid grid-cols-2 gap-2  lg:grid-cols-4 lg:w-9/12  md:grid-cols-2 md:w-7/12 sm:grid-cols-1 sm:w-5/12  mx-[20.5rem] mt-8">
        {movies.map(
          ({
            kinopoiskId,
            ratingKinopoisk,
            posterUrlPreview,
            nameRu,
            genres,
            filmId,
            rating,
          }) => (
            <MovieItem
              key={uuidv4()}
              kinopoiskId={kinopoiskId}
              filmId={filmId}
              nameRu={nameRu}
              ratingKinopoisk={
                ratingKinopoisk === undefined ? rating : ratingKinopoisk
              }
              genres={genres}
              posterUrlPreview={posterUrlPreview}
              rating={rating}
            />
          )
        )}
      </div>
    </div>
  )
}
