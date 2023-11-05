//esercitazione n° 1

//console.log(true);

function saturdaysNightFever(bodyTemperature) {
  if (bodyTemperature >= 34 && bodyTemperature < 37) {
    return "freddo";
  } else if (bodyTemperature < 33) {
    return "fatti un goccio";
  } else if (bodyTemperature == 37) {
    return "mite";
  } else if (bodyTemperature > 37 && bodyTemperature <= 39) {
    return "caldo";
  } else if (bodyTemperature >= 40) {
    return "fritto";
  }
}

console.log(saturdaysNightFever(34));

//esercitazione n° 2

const me = {
  movies: ["Ace Ventura", "The Wall", "Home Alone"],
  footballPlayers: ["Roberto Baggio", "Ronaldo il Fenomeno", "Messi"],
  instruments: ["doorbell", "interphone", "ringbell"],
  pizza: ["parmigiana", "marinara", "san Daniele"],
  hobbies: ["photography", "cooking", "series TV"],
};

console.log("My favourite football player is", me.footballPlayers[0]);
console.log("I can play the", me.instruments[2]);
console.log("my favourite pizza is", me.pizza[1]);
console.log("my top movie is", me.movies[2]);
console.log("my favourite hobby is", me.hobbies[0]);

//esercitazione N° 3

const favourites = [];

//  function addmovies(me.movies) {
//   console.log(favourites);
//  }
