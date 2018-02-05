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
    $('.genre-button').css('background-color', '#fff');

    $(this).css('color', '#fff');            
    $(this).css('background-color', color)
    //$(this).css('background-color', color)

});








$('.genre-button').on('click', function(){

  // update our main object with attributes from the emoji button
  main.genreID = $(this).attr("genre-id");
  main.genreChoice = $(this).attr("genre-name").toLowerCase();
  main.genreColor = $(this).attr("color");
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
  save.genreColor = main.genreColor;

  save.movie.title=current.movie.title;
  save.movie.poster_path=current.movie.poster_path;
  save.movie.overview=current.movie.overview;
  save.movie.release_date=current.movie.release_date;
  save.drink.name=current.drink.name;
  save.drink.image_path=current.drink.image_path; 
  // save.movie.genre=current.movie.name;
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
      savedColor: main.genreColor,
      savedMovie: current.movie.title,
      savedPoster: current.movie.poster_path,
      savedDrinkImg: current.drink.image_path,
      savedDrink: current.drink.name,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
});



database.ref().on("child_added", function(snapshot) {
  var tr = $("<tr>");

  trashBtn = $("<div>")
    .addClass('trash-btn')
    .attr("data-key", snapshot.key)
    .click(deleteRow); // delete function
    $("<i>").addClass("far fa-trash-alt trash-style").appendTo(trashBtn);


  var color = snapshot.child("savedColor").val()
  td = $("<td>");
    td.css('border-left', 'none');
    td.css('text-align', 'center'); 
    p = $("<p>")
      .text(snapshot.child("savedGenre").val().toUpperCase())
      .css('font-size', '14px')
      .css('display','inline-block')
      .css('padding','6px')
      .css('border','1px solid'+color+'') 
      .css('background-color', '#fff')
      .css('z-index','2')     
      .css('box-shadow','1px 1px 0 '+color+', 2px 2px 0 '+color)
      .appendTo(td);
  td.appendTo(tr);
  

  td = $("<td>");
    td.text(snapshot.child("savedMovie").val());
    td.appendTo(tr);

  td = $("<td>");
    var posterImg = $("<img>");
    posterImg.attr('src',snapshot.child("savedPoster").val());
    posterImg.addClass('tableImg');
    posterImg.appendTo(td);
  td.appendTo(tr);

  td = $("<td>");
    var drinkImg = $("<img>");
    drinkImg.attr('src', 'images/drinks/drinks_' + snapshot.child("savedDrinkImg").val() + '.png');
    drinkImg.addClass('tableImg');
    drinkImg.appendTo(td);
  td.appendTo(tr);

  td = $("<td>");
  td.text(snapshot.child("savedDrink").val());
  td.appendTo(tr);

  var td = $("<td>");
  td.html(trashBtn);
  td.css("text-align", 'center');
  td.appendTo(tr);

  $(".table").prepend(tr);


  $(".trash-btn")
    .mouseenter(function() {
      $(this).closest('tr').css('background-image', 'url("images/bg.png")');
      $(this).closest('tr').css( "background-size", "5px 5px");
    })
    .mouseleave(function() {
      $(this).closest('tr').css('background-image', 'none');
      $(this).closest('tr').css( "background-color", "#fff" );
    });



});


