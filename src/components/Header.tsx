import { Link } from "react-router-dom";
import favorite from "../assets/svg/favorite.svg"
import home from "../assets/svg/home.svg";
import trends from "../assets/svg/trends.svg";
import { FAVORITE_LIST, HOME, LOGIN, TRENDS } from "../costants/routes";
import { Search } from "./Search";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser } from "../store/authStore/authSlice";
import { useAuth } from "../hooks/useAuth/useAuth";

export const Header = () => {
  const { isAuth, email } = useAuth();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  return (
    <div className="flex flex-col m-10 w-40 relative">
      <div className="flex gap-15 fixed">
        <div className="font-manrope text-3xl text-white font-bold ">
          КИНОПОИСК
          <span className="font-manrope text-3xl text-orange-600 font-bold ">
            HOUSE
          </span>
        </div>
        <div className="ml-14">
          <Search />
        </div>
        <div className="flex ml-2 font-exo">
          {isAuth ? (
            <button
              className="h-[3.2rem] w-36 font-medium border-2 border-gray-500 bg-gray-600 text-orange-500 rounded-xl cursor-pointer"
              onClick={() => {
                dispatch(removeUser());
                navigate(LOGIN);
              }}
            >
              {" "}
              Log out from {email}
            </button>
          ) : (
            <button
              className="h-11 w-36 font-semibold border-2 border-gray-500 bg-gray-600 text-orange-500 rounded-xl cursor-pointer"
              onClick={() => navigate(LOGIN)}
            >
              Login
            </button>
          )}{" "}
        </div>
      </div>
      <div className="flex flex-col gap-5 mt-24 cursor-pointer fixed">
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
  );
};
