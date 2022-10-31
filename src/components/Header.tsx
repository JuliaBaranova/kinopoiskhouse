import {Link} from "react-router-dom"

import home from "../assets/svg/home.svg"
import trends from "../assets/svg/trends.svg"
import favorite from "../assets/svg/favorite.svg"
import { HOME, TRENDS, FAVORITE } from "../costants/routes"
import { Search } from "./Search"

export const Header= () => {
    return (
        <div className="flex flex-col m-10 w-40 relative">
           <div className="flex gap-15 fixed">
            <div className="font-manrope text-3xl text-white font-bold ">КИНОПОИСК<span className="font-manrope text-3xl text-orange-600 font-bold ">HOUSE</span></div>
            <div className="ml-14"><Search /></div>
            </div>
            <div className="flex flex-col gap-5 mt-24 cursor-pointer fixed">
                <Link className="flex gap-5" to={HOME}>
                    <img src={home} alt="home"/>
                    <span className="text-gray-500 font-semibold text-lg">Home</span>
                </Link>
                <Link className="flex gap-5" to={TRENDS}>
                    <img src={trends} alt="trend"/>
                    <span className="text-gray-500 font-semibold text-lg">Trends</span>
                </Link>
                <Link className="flex gap-5" to={FAVORITE}>
                    <img src={favorite} alt="favorite"/>
                    <span className="text-gray-500 font-semibold text-lg">Favorites</span>
                </Link>
            </div> 
          

        </div>
    )
}
