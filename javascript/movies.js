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

  $('.emoji-button').on('click', function(){

      var movieGenre = $(this).attr("genre-id");
      var drinksGenre = $(this).attr("genre-name").toLowerCase();
      displayMovieInfo(movieGenre);

      console.log(movieGenre, drinksGenre);

      getDrink(drinksGenre);
      console.log(drink.name, drink.genre);

  });
    

  function displayMovieInfo(genre) {

        var randomNumber = Math.floor(Math.random() * 20);
        console.log("testing random number: ", randomNumber); 
          // genres.genres[i].length)];

        console.log("genreId: " + genre);
        //console.log(displayMovieInfo);

        var queryURL = "https://api.themoviedb.org/3/discover/movie?api_key=0531a8a6b116e7a8d8b9559e7b0b1416&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=" + genre


        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {

          // console.log("genre results: ", response.results[randomNumber].poster_path);

        var posterURL = "http://image.tmdb.org/t/p/w185" + response.results[randomNumber].poster_path;
        var image = $("<img>").attr("src", posterURL);


        $('.movies-view').append('Title: ', response.results[randomNumber].title + '<br>');
        image.appendTo('.movies-view');
        $('.movies-view').append('<br>' + 'Plot: ', response.results[randomNumber].overview + '<br>');          
        $('.movies-view').append('Released Date: ', response.results[randomNumber].release_date + '<br>'); 

       
      });
    }
});
    


