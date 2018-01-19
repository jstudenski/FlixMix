var drinks = [
  {
    "name": "Cosmopolitan",
    "img": "",
    "genre": ["romance", "comedy"]
  },
  {
    "name": "Black Velvet",
    "img": "",
    "genre": ["horror"]
  },
  {
    "name": "Punch",
    "img": "",
    "genre": ["family"]
  },
  {
    "name": "Whiskey",
    "img": "",
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
    drink = random; // drink found!
  }
}

