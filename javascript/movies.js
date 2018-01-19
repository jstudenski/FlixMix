
  // var genres = ["Comedy", "Family", "Action", "Horror", "Romance"]

  var genres = {
     "genres": [ 
     {
        "emoji" : "images/moods/action.png",
        "id": 28,
        "name": "Action"
      },
      // {
      //   "id": 12,
      //   "name": "Adventure"
      // },
      // {
      //   "id": 16,
      //   "name": "Animation"
      // },
      {
        "emoji" : "images/moods/comedy.png",
        "id": 35,
        "name": "Comedy"
      },
      // {
      //   "id": 80,
      //   "name": "Crime"
      // },
      // {
      //   "id": 99,
      //   "name": "Documentary"
      // },
      // {
      //   "id": 18,
      //   "name": "Drama"
      // },
      {
        "emoji" : "images/moods/family.png",
        "id": 10751,
        "name": "Family"
      },
      // {
      //   "id": 14,
      //   "name": "Fantasy"
      // },
      // {
      //   "id": 36,
      //   "name": "History"
      // },
      {
        "emoji" : "images/moods/horror.png",
        "id": 27,
        "name": "Horror"
      },
      // {
      //   "id": 10402,
      //   "name": "Music"
      // },
      // {
      //   "id": 9648,
      //   "name": "Mystery"
      // },
      {
        "emoji" : "images/moods/romance.png",
        "id": 10749,
        "name": "Romance"
      },
      // {
      //   "id": 878,
      //   "name": "Science Fiction"
      // },
      // {
      //   "id": 10770,
      //   "name": "TV Movie"
      // },
      // {
      //   "id": 53,
      //   "name": "Thriller"
      // },
      // {
      //   "id": 10752,
      //   "name": "War"
      // },
      // {
      //   "id": 37,
      //   "name": "Western"
      // }
    ]
  }

  function renderButtons() {

        $("#buttons-view").empty();

        // Looping through the array of movies
        for (var i = 0; i < genres.genres.length; i++) {
          console.log(genres.genres[i]);

          var a = $("<img>");
          a.addClass("emoji-button");
          a.attr("genre-id", genres.genres[i].id);
          a.attr("genre-name", genres.genres[i].name);
          a.attr("src", genres.genres[i].emoji);

          $("#buttons-view").append(a);

        }
      }

  renderButtons();

      // function displayMovieInfo() {

      //   console.log();
      //   var genreId = $(this).attr("genre-id");

      //   console.log(genreId);

      //   var queryURL = "https://api.themoviedb.org/3/discover/movie?api_key=0531a8a6b116e7a8d8b9559e7b0b1416&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=" + genreId

      //   $.ajax({
      //     url: queryURL,
      //     method: "GET"
      //   }).done(function(response) {

      //     console.log(response.results);

      //     var theMovieDb = theMovieDb.genres.getMovies({"id": 28}, successCB, errorCB);
      //     console.log(theMovieDb);

      //     // Creating a div to hold the movie
      //     var movieDiv = $("<div class='movie'>");

      //     // Storing the rating data
      //     var results = response.results;

      //     // Creating an element to have the rating displayed
      //     var pOne = $("<p>").text(response.results);

      //     // Displaying the rating
      //     movieDiv.append(pOne);

      //     // Storing the release year
      //     // var released = response.release_date;

      //     // // Creating an element to hold the release year
      //     // var pTwo = $("<p>").text("Released: " + released);

      //     // // Displaying the release year
      //     // movieDiv.append(pTwo);

      //     // Storing the plot
      //   //   var plot = response.Overview;

      //   //   // Creating an element to hold the plot
      //   //   var pThree = $("<p>").text("Plot: " + plot);

      //   //   // Appending the plot
      //   //   movieDiv.append(pThree);

      //   //   // Retrieving the URL for the image
      //   //   var imgURL = response.backdrop_path;

      //   //   // Creating an element to hold the image
      //   //   var image = $("<img>").attr("src", imgURL);

      //   //   // Appending the image
      //   //   movieDiv.append(image);

      //   //   // Putting the entire movie above the previous movies
      //   //   $("#movies-view").prepend(movieDiv);
      //   });

      // };


      // // console.log(genres.name.length);

      // // Function for displaying movie data
      // // function renderButtons() {

      // //   $("#buttons-view").empty();

      // //   // Looping through the array of movies
      // //   for (var i = 0; i < genres.genres.length; i++) {
      // //     console.log(genres.genres[i]);

      // //     var a = $("<button>");
      // //     var imageContainer = $('<button id="imageDiv">');
      // //     a.addClass("movie");
      // //     a.attr("genre-id", genres.genres[i].id);
      // //     a.attr("genre-name", genres.genres[i].name);
      // //     a.text(genres.genres[i].name);

      // //     $("#buttons-view").append(a);

      // //   }

      //   $(document).ready(function(){
      //     var imageContainer = $('<div id="imageDiv"></div>');
      //     var image1 = $('<img class="emoji-button" src="images/moods/action.png"/>');
      //     var image2 = $('<img class="emoji-button" src="images/moods/comedy.png"/>');
      //     var image3 = $('<img class="emoji-button" src="images/moods/family.png"/>');
      //     var image4 = $('<img class="emoji-button" src="images/moods/horror.png"/>');
      //     var image5 = $('<img class="emoji-button" src="images/moods/romance.png"/>');
      //     imageContainer.append(image1);
      //     imageContainer.append(image2);
      //     imageContainer.append(image3);
      //     imageContainer.append(image4);
      //     imageContainer.append(image5);
      //     $('body').append(imageContainer);
      //     });

      // }
      
      // // Adding a click event listener to all elements with a class of "movie"
      // $(document).on("click", ".movie", displayMovieInfo);

      // // Calling the renderButtons function to display the intial buttons
      // renderButtons();

