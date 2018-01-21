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

$(".new-drink").click(function() {
  console.log("new-drink Clicked!");
});

$(".new-movie").click(function() {
  console.log("new-movie Clicked!");
});

$(".new-pairing").click(function() {
  console.log("new-pairing Clicked!");
});

$(".save-pairing").click(function() {
  console.log("save-pairing Clicked!");
});