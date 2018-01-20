$(document).ready(function() {
  console.log("hello!");
  

  var genres = {
    "genres": [ 
     {
        "emoji" : "images/moods/action.png",
        "id": 28,
        "name": "action"

      },
      {
        "emoji" : "images/moods/adventure.png",
        "id": 12,
        "name": "adventure"
      },
      // {
      //   "id": 16,
      //   "name": "animation"
      // },
      {
        "emoji" : "images/moods/comedy.png",
        "id": 35,
        "name": "comedy"
      },
      // {
      //   "id": 80,
      //   "name": "crime"
      // },
      {
        "emoji" : "images/moods/documentary.png",
        "id": 99,
        "name": "documentary"
      },
      {
        "emoji" : "images/moods/drama.png",
        "id": 18,
        "name": "drama"
      },
      {
        "emoji" : "images/moods/family.png",
        "id": 10751,
        "name": "family"

      },
      {
        "emoji" : "images/moods/fantasy.png",
        "id": 14,
        "name": "fantasy"
      },
      {
        "emoji" : "images/moods/history.png",
        "id": 36,
        "name": "history"
      },
      {
        "emoji" : "images/moods/horror.png",
        "id": 27,
        "name": "horror"
      },
      {
        "emoji" : "images/moods/music.png",
        "id": 10402,
        "name": "music"
      },
      {
        "emoji" : "images/moods/mystery.png",
        "id": 9648,
        "name": "mystery"
      },
      {
        "emoji" : "images/moods/romance.png",
        "id": 10749,
        "name": "romance"
      },
      {
        "emoji" : "images/moods/scifi.png",
        "id": 878,
        "name": "scifi"
      },
      // {
      //   "id": 53,
      //   "name": "thriller"
      // },
      {
        "emoji" : "images/moods/war.png",
        "id": 10752,
        "name": "war"
      },
      {
        "emoji" : "images/moods/western.png",
        "id": 37,
        "name": "western"
      }
    ]
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
var movieGenre;
var drinksGenre;

  $('.emoji-button').on('click', function(){


        var movieGenre = $(this).attr("genre-id");
        var drinksGenre = $(this).attr("genre-name").toLowerCase();

        movieGenre = $(this).attr("genre-id");
        drinksGenre = $(this).attr("genre-name").toLowerCase();
        displayMovieInfo();


        console.log(movieGenre, drinksGenre);

        getDrink(drinksGenre);
        console.log(drink.name, drink.genre);


        // getMovie(movieGenre);
        // console.log();
  });

});
    //     var queryURL = "https://api.themoviedb.org/3/discover/movie?api_key=0531a8a6b116e7a8d8b9559e7b0b1416&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=" + genreId

         // getMovie(movieGenre);
        // console.log();
  // });

  function displayMovieInfo() {

        //console.log();
        //var genreId = $(this).attr("genre-id");

        console.log("genreId: " + movieGenre);
        //console.log(displayMovieInfo);

        var queryURL = "https://api.themoviedb.org/3/discover/movie?api_key=0531a8a6b116e7a8d8b9559e7b0b1416&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=" + movieGenre


    //     $.ajax({
    //       url: queryURL,
    //       method: "GET"
    //     }).done(function(response) {

    //       console.log(response.results);


    //       var theMovieDb = theMovieDb.genres.getMovies({"id": 28}, successCB, errorCB);
    //       console.log(theMovieDb);

          // var theMovieDb = theMovieDb.genres.getMovies({"id": 28}, successCB, errorCB);
          // console.log(theMovieDb);


    //   //     // Creating a div to hold the movie
    //   //     var movieDiv = $("<div class='movie'>");

    //   //     // Storing the rating data
    //   //     var results = response.results;

    //   //     // Creating an element to have the rating displayed
    //   //     var pOne = $("<p>").text(response.results);

    //   //     // Displaying the rating
    //   //     movieDiv.append(pOne);

    //   //     // Storing the release year
    //   //     // var released = response.release_date;

    //   //     // // Creating an element to hold the release year
    //   //     // var pTwo = $("<p>").text("Released: " + released);

    //   //     // // Displaying the release year
    //   //     // movieDiv.append(pTwo);

    //   //     // Storing the plot
    //   //   //   var plot = response.Overview;

    //   //   //   // Creating an element to hold the plot
    //   //   //   var pThree = $("<p>").text("Plot: " + plot);

    //   //   //   // Appending the plot
    //   //   //   movieDiv.append(pThree);

    //   //   //   // Retrieving the URL for the image
    //   //   //   var imgURL = response.backdrop_path;

    //   //   //   // Creating an element to hold the image
    //   //   //   var image = $("<img>").attr("src", imgURL);

    //   //   //   // Appending the image
    //   //   //   movieDiv.append(image);


    //   //   //   // Putting the entire movie above the previous movies
    //   //   //   $("#movies-view").prepend(movieDiv);
    //     });
    // });

      //   //   // Putting the entire movie above the previous movies
      //   //   $("#movies-view").prepend(movieDiv);
        }
    


      // console.log(genres.name.length);

      // Function for displaying movie data
      // function renderButtons() {

      //   $("#buttons-view").empty();

      //   // Looping through the array of movies
      //   for (var i = 0; i < genres.genres.length; i++) {
      //     console.log(genres.genres[i]);

      //     var a = $("<button>");
      //     var imageContainer = $('<button id="imageDiv">');
      //     a.addClass("movie");
      //     a.attr("genre-id", genres.genres[i].id);
      //     a.attr("genre-name", genres.genres[i].name);
      //     a.text(genres.genres[i].name);

      //     $("#buttons-view").append(a);

      //   }
      
      // Adding a click event listener to all elements with a class of "movie"


