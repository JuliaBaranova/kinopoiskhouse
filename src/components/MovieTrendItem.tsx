import { ITrend } from "../types/trendMovie"
import { Link } from "react-router-dom"
import { MOVIES } from "../costants/routes"

export const MovieTrendItem = ({
  filmId,
  rating,
  posterUrlPreview,
  nameRu,
  genres,
}: ITrend) => {
  return (
    <div key={filmId} className="flex flex-col  gap-1 font-exo w-72">
      <Link to={`${MOVIES}/${filmId}`}>
        <img src={posterUrlPreview} className="rounded-2xl h-96 "  alt="card" />
      </Link>
      <p className="bg-green-500 m-2.5 text-white py-0.5 px-2.5 absolute text-base font-semibold rounded-2xl">
        {rating}
      </p>
      <Link
        to={`${MOVIES}/${filmId}`}
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
