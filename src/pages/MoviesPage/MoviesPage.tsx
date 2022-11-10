import { MovieItem } from "../../components/MovieItem";
import { useStore } from "../../hooks/useStore/useStore";
import { getMoviesAsync } from "../../store/movieStore/movieReducers";
import { Spinner } from "../../components/Spinner";
import { DropDown } from "../../components/DropDown";

import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Pagination } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../styles/mui";
import { ErrorMessage } from "../../components/ErrorMessage";

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
      <ErrorMessage/>
    );
  }
  return (
    <>
      <div className="mt-5 mx-[21.5rem]">
        <DropDown
          title="Sort by"
          items={sortItems}
          dropdownValue={dropdownValue}
          setDropdownValue={setDropdownValue}
        />
      </div>
      <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 lg:w-9/12  md:grid-cols-2 md:w-7/12 sm:grid-cols-1 sm:w-5/12 mx-[21.5rem] mt-10">
        {movies.map(
          ({
            kinopoiskId,
            ratingKinopoisk,
            posterUrlPreview,
            nameRu,
            genres, 
            filmId,
            rating
          }) => (
            <MovieItem 
              key={uuidv4()}
              kinopoiskId={kinopoiskId}
              filmId={filmId}
              nameRu={nameRu}
              ratingKinopoisk={ratingKinopoisk===undefined ? rating : ratingKinopoisk}
              genres={genres}
              posterUrlPreview={posterUrlPreview} 
              rating ={rating}
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
            count={5}
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
