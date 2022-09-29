"use strict";

const numberWatchedFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberWatchedFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
const firstWatchedMovie = prompt(
    "Один из последних просмотренных фильмов?",
    ""
  ),
  valueFirstWatchedMovie = prompt("На сколько оцените его?", ""),
  secondWatchedMovie = prompt("Один из последних просмотренных фильмов?", ""),
  valuesecondWatchedMovie = prompt("На сколько оцените его?", "");

personalMovieDB.movies[firstWatchedMovie] = valueFirstWatchedMovie;
personalMovieDB.movies[secondWatchedMovie] = valuesecondWatchedMovie;

console.log(personalMovieDB);
