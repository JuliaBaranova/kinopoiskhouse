#  <p align="center">![id](/public/logo1.jpg) KinopoiskHouse
___

## A Kinopoisk website clone ##
[<img src='https://i.ibb.co/wyyhJcc/imgonline-com-ua-Resize-42-B6-HI9p-W54-HTc.jpg'/>]()
___
## Technologies used:
[<img src='https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white'/>](https://www.typescriptlang.org/) [<img src='https://img.shields.io/badge/React JS-20232A?style=for-the-badge&logo=react&logoColor=61DAFB'  />](https://reactjs.org/) [<img src='https://img.shields.io/badge/Redux Toolkit-593D88?style=for-the-badge&logo=redux&logoColor=white'  />](https://redux-toolkit.js.org/) [<img src='https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=61DAFB'  />](https://tailwindcss.com/docs/installation) [<img src='https://img.shields.io/badge/swagger-%2385EA2D.svg?&style=for-the-badge&logo=swagger&logoColor=black'/>](https://kinopoiskapiunofficial.tech/documentation/api/#/)
___


## Getting started

```
git clone https://github.com/JuliaBaranova/kinopoiskhouse.git
```

## Setting
 Create a file .env and add the following settings there:
 ```
The keys can be obtained from https://firebase.google.com/
REACT_APP_FIREBASE_API_KEY = 
REACT_APP_FIREBASE_AUTH_DOMAIN =
REACT_APP_FIREBASE_PROJECT_ID =
REACT_APP_FIREBASE_STORAGE_BUCKET =
REACT_APP_FIREBASE_MESSAGING_SENDER_ID =
REACT_APP_FIREBASE_APP_ID =

REACT_APP_API_KEY="The key can be obtain from  https://kinopoiskapiunofficial.tech/"
 ```
 ## Start
  ```
  npm start or yarn start
  ```
___
## Pages project
* [MoviesPage](/src/pages/MoviesPage/MoviesPage.tsx) - this is the main page with movies
* [FilmIdPage](/src/pages/FilmIdPage/FilmIdPage.tsx) -this is the movie details page
* [TrendMoviePage](/src/pages/TrendMoviePage/TrendMovie.tsx) - this is a page with the top 100 best movies of the kinopoisk
* [SearchMoviePage](/src/pages/SearchMoviePage/SearchMovie.tsx) - this is a page with search results for a list of movies by keywords
* [FavoriteList](/src/pages/FavoriteList/FavoriteList.tsx) -this is a page with favorite movies, available only to authorized users
* [LoginPage](/src/pages/LoginPage/LoginPage.tsx) - this is the login page, uses a firebase to authenticate the user
* [RegisterPage](/src/pages/RegisterPage/RegisterPage.tsx) - this is the register page, uses firebase for user registration


#### To create the project, the api https://kinopoiskapiunofficial.tech/ was used.
##### Methods used: 
* Getting movie data by movie kinopoisk id.
* Getting a movie list from various tops and collections.
* Getting a list of movies by various filters.
* Getting a list of movies by keywords.
* Getting data about actors, directors, etc.

