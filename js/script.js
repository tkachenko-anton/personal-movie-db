'use strict';

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('How many movies have you watched?', '');

  while (numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms)) {
    numberOfFilms = prompt('How many movies have you watched?', '');
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const question1 = prompt('Which one of the last movies have you watched?', ''),
          question2 = prompt('How much would you rate it?', '');
  
    if (question1 != null && question2 != null && question1 != '' && question2 != '' && question1.length < 50) {
      personalMovieDB.movies[question1] = question2;
      console.log('done');
    } else {
      console.log('error');
      i--;
    }
  }
}

// rememberMyFilms();
  
function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Just a few movies");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log("You are a classic spectator");
  } else if (personalMovieDB.count >= 30) {
    console.log("You are a movie fan");
  } else {
    console.log("An error has occurred");
  }
}

// detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Your favorite genre is numbered ${i}`);
  }
}

writeYourGenres();