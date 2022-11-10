import { Link } from "react-router-dom"
import favorite from "../assets/svg/favorite.svg"
import home from "../assets/svg/home.svg"
import trends from "../assets/svg/trends.svg"
import { FAVORITE_LIST, HOME, TRENDS } from "../costants/routes"

export const SideBar = () => {
  return (
    <div>
      <div className="flex fixed flex-col gap-5 px-8 py-8 cursor-pointer">
        <Link className="flex gap-5" to={HOME}>
          <img src={home} alt="home" />
          <span className="text-gray-500 font-semibold text-lg">Home</span>
        </Link>
        <Link className="flex gap-5" to={TRENDS}>
          <img src={trends} alt="trend" />
          <span className="text-gray-500 font-semibold text-lg">Trends</span>
        </Link>
        <Link className="flex gap-5" to={FAVORITE_LIST}>
          <img src={favorite} alt="favorite" />
          <span className="text-gray-500 font-semibold text-lg">Favorites</span>
        </Link>
      </div>
    </div>
  )
}
