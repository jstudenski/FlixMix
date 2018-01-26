// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDoXwhJFk8ZKIL8GbP0ZLb09GjohV0KwTM",
    authDomain: "movie-drink-pairing.firebaseapp.com",
    databaseURL: "https://movie-drink-pairing.firebaseio.com",
    projectId: "movie-drink-pairing",
    storageBucket: "",
    messagingSenderId: "480029459361"
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
   // "savedPairings": []


// renders our emoji buttons
function renderButtons() {
  //console.log(main);
  // clear buttons area
  $("#buttons-view").empty();
  // Looping through the array of genres (in movies.js)
  for (var i = 0; i < genres.genres.length; i++) {
    // create emoji buttons
    var a = $("<img>");
    a.addClass("emoji-button");
    a.attr("genre-id", genres.genres[i].id);
    a.attr("genre-name", genres.genres[i].name);
    a.attr("src", genres.genres[i].emoji);
    $("#buttons-view").append(a);
  }
}


// remove row and item from firebase
function deleteRow() {
  
  // remove item from firebase
  database.ref().child($(this).attr('data-key')).remove();
  // remove table row
  this.closest("tr").remove();

}

// on startup create our emoji buttons
renderButtons();






// when you click an emoji
$('.emoji-button').on('click', function(){
  // slide the page down (1 second)
  $('html,body').animate({
    scrollTop: $("#buttons-view").offset().top},
  1000);

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

    // generate our table
    database.ref().on("child_added", function(snapshot) {
    var savedRow = $("<tr>");

    var trash = $("<i>");
      trash.addClass("far fa-trash-alt");

    var tableData = $("<td>");
      tableData.html(trash);
      tableData.attr("data-key", snapshot.key);
      tableData.click(deleteRow); // delete function

    savedRow.html(
      "<td>" + snapshot.child("savedGenre").val() + "</td>" + 
      "<td>" + snapshot.child("savedMovie").val() + "</td>" + 
      "<td>" + '<img class="tableImg" src = "' + snapshot.child("savedPoster").val() + '">' + "</td>" + 
      "<td>" + '<img class="tableImg" src = "images/drinks/drinks_' + snapshot.child("savedDrinkImg").val() + '.png">' + "</td>" + 
      "<td>" + snapshot.child("savedDrink").val() + "</td>");

      tableData.appendTo(savedRow);


      $(".table").prepend(savedRow);
  });
  
});


// generateTable();

// // go through savedPairings and generate table
// function generateTable() {
//   // clear table
//   $('tbody').empty();
//   var drink;

//   // go through saved movies and create table rows
//   $.each(main.savedPairings, function( index, value ) {

//     var moviePoster = $("<img>")
//       .attr("src", main.savedPairings[index].movie.poster_path)
//       .css("width", "100px");

//     var drinkImg = $('<img>')
//       .attr("src", 'images/drinks/drinks_' + main.savedPairings[index].drink.image_path + '.png')
//       .css("width", "100px");

//     trash = $("<i>").addClass("far fa-trash-alt"); // font awesome icon
//     var remove = $('<button>')
//       .addClass('btn btn-danger')
//       .html(trash)      
//       .attr('object-index', index) // use to find which item to remove from our object
//       .click(removeItem);


//     var $tr = $('<tr>').append(
//       $('<td>').text(main.savedPairings[index].genre),
//       $('<td>').text(main.savedPairings[index].movie.title),
//       $('<td>').html(moviePoster),
//       $('<td>').html(drinkImg),
//       $('<td>').text(main.savedPairings[index].drink.name),
//       $('<td>').html(remove),
//     ).appendTo('.table');

//   });
// }

//  remove function before switching to firebase

// function removeItem (){
//   // slice the item from our main object using it's index
//   main.savedPairings.splice($(this).attr('object-index'),1);
//   generateTable();
// }