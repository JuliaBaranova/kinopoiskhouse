import { MovieTrendItem } from "../../components/MovieTrendItem"
import { useStore } from "../../hooks/useStore/useStore"
import { getMovieTopAsync } from "../../store/trendMovieStore/trendMovieSlice"
import { Spinner } from "../../components/Spinner"
import { v4 as uuidv4 } from "uuid"
import { useEffect, useState } from "react"
import { Pagination } from "@mui/material"
import { ThemeProvider } from "@emotion/react"
import { theme } from "../../styles/mui"
import { ErrorMessage } from "../../components/ErrorMessage"

export const TrendMovie = () => {
  const { store, dispatch } = useStore()
  const { trend, isLoading, error } = store.trend
  const [page, setPage] = useState(1)

  useEffect(() => {
    dispatch(getMovieTopAsync({ currentPage: page }))
  }, [dispatch, page])

  if (isLoading) {
    return <Spinner />
  } else if (error) {
    return (
      <ErrorMessage/>
    )
  }
  return (
    <>
      <div className="grid grid-cols-2 gap-2  lg:grid-cols-4 lg:w-9/12  md:grid-cols-3 md:w-7/12 sm:grid-cols-1 sm:w-5/12 w-9/12 mx-[21.5rem] mt-10">
        {trend.map(({ filmId, rating, posterUrlPreview, nameRu, genres }) => (
          <MovieTrendItem
            key={uuidv4()}
            filmId={filmId}
            nameRu={nameRu}
            rating={rating}
            genres={genres}
            posterUrlPreview={posterUrlPreview}
          />
        ))}
      </div>
      <div className="flex justify-center items-center my-16 text-white">
        <ThemeProvider theme={theme}>
          <Pagination
            sx={{
              button: { color: "#ffffff" },
              div: { color: "#ffffff" },
              "& button.Mui-selected": { color: "#ff8c00", fontWeight: "bold" },
            }}
            size="large"
            count={16}
            page={page}
            onChange={(_, num) => setPage(num)}
            showFirstButton
            showLastButton
            color="secondary"
          />
        </ThemeProvider>
      </div>
    </>
  )
}
