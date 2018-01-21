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



 function renderButtons() {

        $("#buttons-view").empty();

        // Looping through the array of movies
        for (var i = 0; i < genres.genres.length; i++) {

          var a = $("<img>");
          a.addClass("emoji-button");
          a.attr("genre-id", genres.genres[i].id);
          a.attr("genre-name", genres.genres[i].name);
          a.attr("src", genres.genres[i].emoji);

          $("#buttons-view").append(a);

        }
      }

  renderButtons();

  $('.emoji-button').on('click', function(){

      var movieGenre = $(this).attr("genre-id");
      var drinksGenre = $(this).attr("genre-name").toLowerCase();
      displayMovieInfo(movieGenre);

      console.log(movieGenre, drinksGenre);

      getDrink(drinksGenre);
      console.log(drink.name, drink.genre);

  });


  

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