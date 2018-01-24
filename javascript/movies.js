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

function getMovie(genreID) {
  var randomNumber = Math.floor(Math.random() * 20 - 1);
  //console.log("testing random number: ", randomNumber); 
  // genres.genres[i].length)];

  //console.log("genreId: " + genreID);
  //console.log(displayMovieInfo);

  var queryURL = "https://api.themoviedb.org/3/discover/movie?api_key=0531a8a6b116e7a8d8b9559e7b0b1416&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=" + genreID

  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) {
    // update main object with our ranrom movie
    main.currentPairing.movie.title = response.results[randomNumber].title;
    main.currentPairing.movie.poster_path = "http://image.tmdb.org/t/p/w185" + response.results[randomNumber].poster_path;
    main.currentPairing.movie.overview = response.results[randomNumber].overview;
    main.currentPairing.movie.release_date = response.results[randomNumber].release_date;
    // adds movie to the page
    renderMovie();
  });
}


// takes main.currentPairing.movie and renders it on our page
function renderMovie(){
  //locate current movie in our 'main' object
  currentMovie = main.currentPairing.movie;
  // clear movie on our page now
  $('.movies-view').html('');
  // apend movie to our page
  $('.movie-title').text(currentMovie.title);

  var image = $("<img>").attr("src", currentMovie.poster_path);
  image.appendTo('.movies-view');
  image.css("center");

  $('.movies-view').append('<br>' + 'Plot: ', currentMovie.overview + '<br>');   
  $('.movies-view').append('Released Date: ', currentMovie.release_date + '<br>'); 
}



