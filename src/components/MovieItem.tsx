import { IMovie } from "../types/movie"
import { Link } from "react-router-dom"
import { MOVIES } from "../costants/routes"

export const MovieItem = ({
  kinopoiskId,
  ratingKinopoisk,
  posterUrlPreview,
  nameRu,
  genres,
  filmId,
}: IMovie) => {

  return (
    <div key={kinopoiskId} className="flex flex-col  gap-1 font-exo w-72">
      <Link
        to={`${MOVIES}/${kinopoiskId === undefined ? filmId : kinopoiskId}`}
      >
        <img className="rounded-2xl h-96 " src={posterUrlPreview} alt="card" />
      </Link>
      <p className="bg-green-500 m-2.5 text-white py-0.5 px-2.5 absolute text-base font-semibold rounded-2xl">
        {ratingKinopoisk}
      </p>
      <Link
        to={`${MOVIES}/${kinopoiskId === undefined ? filmId : kinopoiskId}`}
        className="text-base font-bold text-white cursor-pointer"
      >
        {nameRu}
      </Link>
      <div className="flex gap-4 flex-row ">
        {genres.slice(0, 2).map((genre, index) => (
          <p key={index} className="font-medium text-base  text-gray-400 ">
            {genre.genre.charAt(0).toUpperCase() + genre.genre.slice(1)}
          </p>
        ))}
      </div>
    </div>
  )
}
