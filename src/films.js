// const movies = require('./data');
import movies from './data.js';

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  return array.map((array) => array.director);
}
console.log(getAllDirectors(movies));

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  return array.filter((array) => array.director === director);
}
console.log(getMoviesFromDirector(movies, 'Clint Eastwood'));

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const totalScore = getMoviesFromDirector(array, director).reduce(
    (director, movie) => director + movie.score,
    0
  );
  const getAverage =
    totalScore / array.filter((array) => array.director === director).length;
  return Number(getAverage.toFixed(2));
}
console.log(moviesAverageOfDirector(movies, 'Clint Eastwood'));

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  return array
    .map((array) => array.title)
    .sort()
    .slice(0, 20);
}
console.log(orderAlphabetically(movies));

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  return [...array].sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title); //localeCompare: realiza una comparación alfabética
    }
  });
}
console.log(orderByYear(movies));

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  const getMovieByGenre = array.filter((array) => array.genre.includes(genre));
  const TotalScore = getMovieByGenre.reduce(
    (array, movie) => array + movie.score,
    0
  );
  const getAverageScore = TotalScore / getMovieByGenre.length;
  return Number(getAverageScore.toFixed(2));
}
console.log(moviesAverageByCategory(movies, 'Action'));

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
