// getDrink("comedy");
// console.log(drink.name)
// console.log(drink.img)

var main = {
  "genreChoice":"",
    "currentPairing": {
      "movie": {
        "title":"",
        "poster_path":"",
        "overview":"",
        "release_date":""
      },"drink": {
        "name":"",
        "image_path":""
      }
    },
    "savedPairings": {
      
    }
}


main.genreChoice = "comedy";

console.log(main);

getDrink("comedy");

console.log(main.currentPairing.drink.name);

getDrink("comedy");

console.log(main.currentPairing.drink.name);

getDrink("comedy");

console.log(main.currentPairing.drink.name);