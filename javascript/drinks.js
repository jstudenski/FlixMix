var drinks = [
  {
    "name": "Cosmopolitan",
    "image_path": "cosmopolitan.jpg",
    "genre": ["romance", "comedy"]
  },
  {
    "name": "Black Velvet",
    "image_path": "blackvelvet.jpg",
    "genre": ["horror"]
  },
  {
    "name": "Punch",
    "image_path": "punch.jpg",
    "genre": ["family", "comedy"]
  },
  {
    "name": "Whiskey",
    "image_path": "whiskey.jpg",
    "genre": ["action", "comedy"]
  },
]


var drink = {};
// get random drink
function getDrink(genre) {
  // find random drink from array
  var random = drinks[Math.floor(Math.random()*drinks.length)];
  // see if the genre matches
  var index = random.genre.indexOf(genre);
  if (index === -1) {
    getDrink(genre); // start over
  } else {
    main.currentPairing.drink.name = random.name;
    main.currentPairing.drink.image_path = random.image_path;
    // adds drink to the page
    renderDrink();
  }
}

// takes main.currentPairing.drink and renders it on our page
function renderDrink(){
  // clear drink on our page now
  $('.drinks-view').html('');
  $('.drinks-view').append('Name: ' + main.currentPairing.drink.name + '<br>');
}


