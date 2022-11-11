import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { removeUser } from "../store/authStore/authSlice"
import { useAuth } from "../hooks/useAuth/useAuth"
import { SideBar } from "./SideBar"
import { Logo } from "./Logo"
import { Search } from "./Search"
import { HOME, LOGIN } from "../costants/routes"

export const Header = () => {
  const { isAuth, email } = useAuth()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  return (
    <>
      <div className="flex flex-col mt-5 mb-10 w-40 relative">
        <nav className="border-black-200 px-4 lg:px-6 py-2.5 dark:bg-black">
          <div className="flex mb-5 gap-5 fixed">
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
      
      <div className="flex flex-col gap-5 mt-24 ml-8 cursor-pointer fixed">
      <SideBar />
      </div>
      </div>
    </>
  )
}
