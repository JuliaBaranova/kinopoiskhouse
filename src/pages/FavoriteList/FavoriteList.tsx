import {useState} from "react"


export const FavoriteList  = () => {
    const [favList, setFavList]=useState(() =>
    JSON.parse(localStorage.getItem("favorites") || "[]"))
    console.log(favList)

    return (
      <div>My FavList</div>

    )
}