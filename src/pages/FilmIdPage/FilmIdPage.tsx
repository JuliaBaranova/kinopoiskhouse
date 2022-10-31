import { FilmItem } from "../../components/FilmItem";
import { useStore } from "../../hooks/useStore/useStore";
import { getMovieDetailAsync } from "../../store/movieStore/movieSlice";
import { Spinner } from "../../components/Spinner";

import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getStaffAsync } from "../../store/movieStore/movieSlice";
import { StaffItem } from "../../components/StaffItem";

export const FilmIdPage = () => {
  const { filmId } = useParams() as any;
  const { dispatch, store } = useStore();
  const { movieDetail, staff, isLoading, error } = store.movie;
  console.log('movieDetail', movieDetail)
  

  useEffect(() => {
    dispatch(getMovieDetailAsync(filmId));
  }, [filmId, dispatch]);

  useEffect(() => {
    dispatch(getStaffAsync(filmId));
  }, [filmId, dispatch]);

  if (isLoading) {
    return <Spinner />;
  } else if (error) {
    return (
      <div className="flex items-center justify-center text-8xl  text-red-500 font-bold">
        Error! Reload page, please!
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5 ml-96 mt-24">
      <div>
        {movieDetail ? (
          <FilmItem
            key={movieDetail.kinopoiskId}
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
      <div className="grid grid-cols-2 gap-5  md:grid-cols-5 w-9/12 h-auto">
        {Array.isArray(staff) ? staff.slice(0,10).map(({ staffId, nameRu, posterUrl, professionKey }) => (
          <StaffItem
            key={staffId}
            staffId={staffId}
            nameRu={nameRu}
            posterUrl={posterUrl}
            professionKey={professionKey}
          />
        )): null}
      </div>
    </div>
  );
};
