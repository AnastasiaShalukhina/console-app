"use strict";

let numberWatchedFilms;

function start() {
  numberWatchedFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  while (
    numberWatchedFilms == "" ||
    numberWatchedFilms == null ||
    isNaN(numberWatchedFilms)
  ) {
    numberWatchedFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}
start();

const personalMovieDB = {
  count: numberWatchedFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberFilms() {
  for (let i = 0; i < 2; i++) {
    const watchedMovie = prompt("Один из последних просмотренных фильмов?", ""),
      valueWatchedMovie = prompt("На сколько оцените его?", "");
    if (
      watchedMovie != null &&
      valueWatchedMovie != null &&
      watchedMovie != "" &&
      valueWatchedMovie != "" &&
      watchedMovie.length < 50
    ) {
      personalMovieDB.movies[watchedMovie] = valueWatchedMovie;
    } else {
      i--;
    }
  }
}
rememberFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно много фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы - классический зритель");
  } else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }
}
detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i < 4; i++) {
    // если мы выводим i для пользователя
    const genre = prompt(`Ваш любимый жанр под номером ${i}`);
    personalMovieDB.genres[i - 1] = genre;
  }
}
writeYourGenres();
