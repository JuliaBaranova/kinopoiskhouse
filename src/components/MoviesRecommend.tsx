import { Link } from "react-router-dom"
import { IRecommend } from "../types/moviesrec"
import { MOVIES } from "../costants/routes"

export const MoviesRecommend = ({
  filmId,
  nameRu,
  posterUrlPreview,
}: IRecommend) => {
  return (
    <div className="flex flex-col gap-4 font-exo">
      <Link to={`${MOVIES}/${filmId}`}>
        <img
          className="rounded-2xl bg-contain mb-2.5"
          src={posterUrlPreview}
          alt={nameRu}
        />
        <p className="text-lg font-normal text-white">{nameRu}</p>
      </Link>
    </div>
  )
}
