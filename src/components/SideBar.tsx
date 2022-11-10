import { Link } from "react-router-dom"
import home from "../assets/svg/home.svg"
import trends from "../assets/svg/trends.svg"
import favorite from "../assets/svg/favorite.svg"
import { FAVORITE_LIST, HOME, TRENDS } from "../costants/routes"

export const SideBar = () => {
  return (
    <div>
      <div className="flex fixed flex-col gap-5 px-8 py-8 cursor-pointer">
        <Link className="flex gap-5 " to={HOME}>
          <img src={home} alt="home" />
          <span className="text-gray-500 font-semibold text-lg hover:text-orange-600 visited:text-orange-600  focus:text-orange-600">Home</span>
        </Link>
        <Link className="flex gap-5" to={TRENDS}>
          <img src={trends} alt="trend" />
          <span className="text-gray-500 font-semibold text-lg  hover:text-orange-600 visited:text-orange-600  focus:text-orange-600">Trends</span>
        </Link>
        <Link className="flex gap-5" to={FAVORITE_LIST}>
          <img src={favorite} alt="favorite" />
          <span className="text-gray-500 font-semibold text-lg  hover:text-orange-600 visited:text-orange-600  focus:text-orange-600">Favorites</span>
        </Link>
      </div>
    </div>
  )
}
