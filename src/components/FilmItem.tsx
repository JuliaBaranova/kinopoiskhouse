import { IFilm } from "../types/film";
//import mark from "../assets/svg/mark.svg";
import share from "../assets/svg/share.svg";
import imdb from "../assets/svg/imdb.svg";
import { Favorites } from "./Favorites";

export const FilmItem = ({
  kinopoiskId,
  ratingKinopoisk,
  ratingImdb,
  nameRu,
  description,
  year,
  posterUrl,
  countries,
  genres,
}: IFilm) => {
  return (
    <div className="flex ml-52  mb-10 gap-20 lg:w-10/12 md:w-7/12 lg:flex-row md:flex-col sm:w-5/12 sm:flex-col">
      <div className="flex flex-col gap-10">
        <img className="rounded-2xl w-60" src={posterUrl} alt="film" />
        <div className="flex w-60 h-14 bg-gray-700 rounded-2xl items-center justify-center gap-14 ">
          <Favorites id={kinopoiskId}/>
          <p className=" border-r-2 border-black h-14"></p>
          <img className="cursor-pointer" src={share} alt="share" />
        </div>
      </div>
      <div className="flex flex-col gap-10 text-white">
        <div className="flex gap-10 ">
          {genres.slice(0, 2).map((genre) => (
            <p className="font-medium text-gray-400 ">
              {genre.genre.charAt(0).toUpperCase() + genre.genre.slice(1)}
            </p>
          ))}
        </div>
        <div className="text-4xl font-exo font-semibold">{nameRu}</div>
        <div className="flex flex-row text-white">
          <p className="bg-green-500 m-2.5 text-white py-0.5 px-2.5 text-base font-semibold rounded-2xl">{ratingKinopoisk}</p>
          <p className="bg-gray-500 m-2.5 text-white py-0.5 px-2.5 text-base font-semibold rounded-xl flex gap-2.5">
            <img src={imdb} alt="rate" />
            <span className="text-white">{ratingImdb}</span>
          </p>
        </div>
        <div className=" md:w-7/12 sm:w-5/12 lg:w-9/12">{description}</div>
        <div className="flex gap-16">
          <span className="text-gray-300">Year</span>
          {year}
        </div>
        <div className="flex gap-10 ">
          <span className="text-gray-300">Country</span>
          {countries.slice(0, 2).map((country) => (
            <p className="font-medium text-white ">
              {country.country.charAt(0).toUpperCase() +
                country.country.slice(1)}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
