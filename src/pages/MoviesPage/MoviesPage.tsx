import { MovieItem } from "../../components/MovieItem";
import { useStore } from "../../hooks/useStore/useStore";
import { getMoviesAsync } from "../../store/movieStore/movieSlice";

import { useEffect, useState } from "react";
import { Spinner } from "../../components/Spinner";
import { DropDown } from "../../components/DropDown";
import { Pagination } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../styles/mui";


const sortItems = [
  { id: 1, name: "Rating", value: "RATING" },
  { id: 2, name: "Number of assessments", value: "NUM_VOTE" },
  { id: 3, name: "Year", value: "YEAR" },
];

export const MoviesPage = () => {
  const { store, dispatch } = useStore();
  const { movies, isLoading, error } = store.movie;

  const [dropdownValue, setDropdownValue] = useState(sortItems[1].value);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getMoviesAsync({ order: dropdownValue, currentPage: page }));
  }, [dispatch]);

  useEffect(() => {
    if (page !== 0) {
      dispatch(getMoviesAsync({ order: dropdownValue, currentPage: page }));
    }
  }, [dispatch, page, dropdownValue]);

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
      <div className="mx-96 mt-12">
        <DropDown
          title="Sort by"
          items={sortItems}
          dropdownValue={dropdownValue}
          setDropdownValue={setDropdownValue}
        />
      </div>
      <div className="grid grid-cols-2 gap-2  md:grid-cols-4 w-9/12 mx-96 mt-10">
        {movies.map(
          ({
            kinopoiskId,
            ratingKinopoisk,
            posterUrlPreview,
            nameRu,
            genres,
          }) => (
            <MovieItem
              key={kinopoiskId}
              kinopoiskId={kinopoiskId}
              nameRu={nameRu}
              ratingKinopoisk={ratingKinopoisk}
              genres={genres}
              posterUrlPreview={posterUrlPreview}                
            />
          )
        )}
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
            count={20}
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
