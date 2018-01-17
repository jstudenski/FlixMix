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

  var random = drinks[Math.floor(Math.random()*drinks.length)];

  var index = random.genre.indexOf(genre);

  if (index === -1) {
    console.log("incorrect");
    getDrink(genre);
  } else {
    drink = random;
    console.log(random);
  }

}

