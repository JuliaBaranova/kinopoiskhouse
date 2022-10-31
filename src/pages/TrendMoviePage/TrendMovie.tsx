import { MovieTrendItem } from "../../components/MovieTrendItem";
import { useStore } from "../../hooks/useStore/useStore";
import { getMovieTopAsync } from "../../store/trendMovieStore/trendMovieSlice";
import { Spinner } from "../../components/Spinner";

import { useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../styles/mui";

export const TrendMovie = () => {
  const { store, dispatch } = useStore();
  const { trend, isLoading, error } = store.trend;
  const [page, setPage] = useState(1); 

  useEffect(() => {
    dispatch(getMovieTopAsync({ currentPage: page }));
  }, [dispatch, page]);

  if (isLoading) {
    return <Spinner />;
  } else if (error) {
    return (
      <div className="flex items-center justify-center text-8xl text-red-500 font-bold">
        Error! Reload page, please!
      </div>
    );
  }
  return (
    <>
      <div className="grid grid-cols-2 gap-2  md:grid-cols-4 w-9/12 mx-96 mt-24">
        {trend.map(({ filmId, rating, posterUrlPreview, nameRu, genres }) => (
          <MovieTrendItem
            key={filmId}
            filmId={filmId}
            nameRu={nameRu}
            rating={rating}
            genres={genres}
            posterUrlPreview={posterUrlPreview}
          />
        ))}
      </div>
      <div className="flex justify-center items-center ml-48 my-16 text-white">
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
  );
};
