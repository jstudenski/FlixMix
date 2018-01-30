var config = {
  apiKey: "AIzaSyB4FpIdRoERGgPR0pLH3N0taR5ynKgStDU",
  authDomain: "random-movie-f0fbc.firebaseapp.com",
  databaseURL: "https://random-movie-f0fbc.firebaseio.com",
  projectId: "random-movie-f0fbc",
  storageBucket: "random-movie-f0fbc.appspot.com",
  messagingSenderId: "299435642782"
};

firebase.initializeApp(config);
var database = firebase.database();

var main = {
  "genreChoice":"",
  "genreID":"", 
    "currentPairing": {
      "movie": {
        "title":"",
        "poster_path":"",
        "overview":"",
        "release_date":""
      },"drink": {
        "name":"",
        "image_path":"",
        "url":""
      }
    },
  "savedPairings":[]
}

var savedPairings = [];

// remove row and item from firebase
function deleteRow() {
  // remove item from firebase
  database.ref().child($(this).attr('data-key')).remove();
  // remove table row
  this.closest("tr").remove();
}

function renderButtons() {
  // clear buttons area
  $("#buttons-view").empty();
  // Looping through the array of genres (in movies.js)
  for (var i = 0; i < genres.genres.length; i++) {
    // create emoji buttons
    var btn = $("<div>");
    btn.addClass("genre-button");
    btn.attr("genre-id", genres.genres[i].id);
    btn.attr("genre-name", genres.genres[i].name);
    // a.attr("src", genres.genres[i].emoji);
    btn.text(genres.genres[i].name.toUpperCase());

    var color = genres.genres[i].color;
    btn.attr("color", color);
    // btn.css('box-shadow', '1px 1px 0px'+color+',2px 2px 0px'+color+',3px 3px 0px'+color);
    // btn.css('color', color);

    $("#buttons-view").append(btn);
  }
}

// on startup create our emoji buttons
renderButtons();

$('.genre-button').on('click', function(){
    var color = $(this).attr('color');

    $('.genre-button').css('color', '#555555');
    $('.genre-button').css('background-color', '#fff')

    $(this).css('color', '#fff');            
    $(this).css('background-color', color)

});


// $('.genre-button').mouseup(function() {
//   var color = $(this).attr('color');
//   $(this).css('background-color', color);
//   $(this).css('color', '#fff');
// }).mousedown(function() {
//  // $(this).css('box-shadow', 'none');
// });



$('.genre-button').mousedown(function() {
  // $(this).css('box-shadow', 'none');
});


$('.genre-button').on('click', function(){

  // update our main object with attributes from the emoji button
  main.genreID = $(this).attr("genre-id");
  main.genreChoice = $(this).attr("genre-name").toLowerCase();
  // call our function from movies.js to get a random movie
  getMovie(main.genreID);
  // call our function from drinks.js to get a random drink
  getDrink(main.genreChoice);
});

// keep movie but get a new drink
$(".new-drink").click(function() {
  getDrink(main.genreChoice);
});

// keep drink but get a new movie
$(".new-movie").click(function() {
  getMovie(main.genreID);
});

// get a new movie and a new drink
$(".new-pairing").click(function() {
  getDrink(main.genreChoice);
  getMovie(main.genreID);
});


// move current pairing to savedPairings and get a new movie and drink
$(".save-pairing").click(function() {
  current = main.currentPairing;
  // make empty objects and fill them with the current values
  var save ={"movie": {}, "drink":{}};
  save.genre = main.genreChoice;
  save.movie.title=current.movie.title;
  save.movie.poster_path=current.movie.poster_path;
  save.movie.overview=current.movie.overview;
  save.movie.release_date=current.movie.release_date;
  save.drink.name=current.drink.name;
  save.drink.image_path=current.drink.image_path; 
  // push the object to our savedPairings array
  main.savedPairings.push(save);
  // go through savedPairings and generate table
  // generateTable();
  // get a new drink / movie
  getDrink(main.genreChoice);
  getMovie(main.genreID);

  var newSavedPair = database.ref().push({
  });

    newSavedPair.set({
      savedGenre: main.genreChoice,
      savedMovie: current.movie.title,
      savedPoster: current.movie.poster_path,
      savedDrinkImg: current.drink.image_path,
      savedDrink: current.drink.name,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
});



database.ref().on("child_added", function(snapshot) {
  var tr = $("<tr>");
  var i = $("<i>");
  i.addClass("far fa-trash-alt trash-style");
  var img = $("<img>");

  td = $("<td>");
  td.text(snapshot.child("savedGenre").val());
  td.appendTo(tr);

  td = $("<td>");
  td.text(snapshot.child("savedMovie").val());
  td.appendTo(tr);

  td = $("<td>");
    img = $("<img>");
    img.attr('src',snapshot.child("savedPoster").val());
    img.addClass('tableImg');
    img.appendTo(td);
  td.appendTo(tr);

  td = $("<td>");
    img = $("<img>");
    img.attr('src', 'images/drinks/drinks_' + snapshot.child("savedDrinkImg").val() + '.png');
    img.addClass('tableImg');
    img.appendTo(td);
  td.appendTo(tr);

  td = $("<td>");
  td.text(snapshot.child("savedDrink").val());
  td.appendTo(tr);

  var td = $("<td>");
  td.html(i);
  td.attr("data-key", snapshot.key);
  td.click(deleteRow); // delete function
  td.appendTo(tr);

  $(".table").prepend(tr);
});