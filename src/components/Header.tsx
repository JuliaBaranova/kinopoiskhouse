import { HOME, LOGIN } from "../costants/routes"
import { Search } from "./Search"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { removeUser } from "../store/authStore/authSlice"
import { useAuth } from "../hooks/useAuth/useAuth"
import { Logo } from "./Logo"
import { SideBar } from "./SideBar"

export const Header = () => {
  const { isAuth, email } = useAuth()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  return (
    <>
    <div className="sticky h-16 top-0 z-50">
      <nav className="border-black-200 px-4 lg:px-6 py-2.5 dark:bg-black">
        <div className="flex items-center justify-center space-x-8">
          <Logo />
          <Search />
          <div className="flex ml-2 font-exo">
            {isAuth ? (
              <button
                className="h-[3.2rem] w-36 font-medium border-2 border-gray-500 bg-gray-600 text-orange-500 rounded-xl cursor-pointer"
                onClick={() => {
                  dispatch(removeUser());
                  navigate(HOME);
                }}
              >
                Log out from {email}
              </button>
            ) : (
              <button
                className="h-11 w-36 font-semibold border-2 border-gray-500 bg-gray-600 text-orange-500 rounded-xl cursor-pointer"
                onClick={() => navigate(LOGIN)}
              >
                Login
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
    <SideBar />
    </>
  )
}
