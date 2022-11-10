import { useNavigate, useSearchParams } from "react-router-dom"
import { useState } from "react"
import { MOVIE_SEARCH } from "../costants/routes"

export const Search = () => {
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const [searchValue, setSearchValue] = useState(params.get("value") || "")

  const onSearch = (e: any) => {
    setSearchValue(e.target.value);
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();

    searchValue && navigate(`${MOVIE_SEARCH}/?value=${searchValue}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[85rem] flex items-center justify-between"
    >
      <input
        className="placeholder:text-xl  block bg-gray-700 w-full border-2 border-slate-300  text-white rounded-l-lg rounded-l-l
         py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-orange-500 focus:ring-orange-500 focus:ring-1 sm:text-sm"
        onChange={onSearch}
        value={searchValue}
        placeholder="Search"
      />
      <button className="bg-orange-500 w-[10rem] p-2 text-white rounded-tr-xl rounded-br-xl">
        Search
      </button>
    </form>
  )
}
