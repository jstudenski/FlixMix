var drinks = [
  {
    "name": "Romeo and Juliet",
    "image_path": "romeoandjuliet",
    "contains_alcohol": true,
    "url":"http://www.hgtv.com/design/make-and-celebrate/entertaining/romeo-and-juliet-cocktail",
    "genres": ["romance", "music"]
  },
  {
    "name": "Gin Martini",
    "image_path": "ginmartini",
    "contains_alcohol": true,
    "url":"https://www.thespruce.com/classic-gin-martini-recipe-759739",
    "genres": ["history", "war", "action", "documentary"]
  },
  {
    "name": "Long Island Iced Tea",
    "image_path": "longisland",
    "contains_alcohol": true,
    "url":"https://www.thespruce.com/long-island-iced-tea-and-variations-759315",
    "genres": ["comedy", "action", "adventure", "fantasy"]
  },
  {
    "name": "The Fog Cutter",
    "image_path": "fogcutter",
    "contains_alcohol": true,
    "url":"http://www.foodandwine.com/recipes/fog-cutter-cocktails-2008",
    "genres": ["comedy", "adventure", "fantasy"]
  },  
  {
    "name": "Rusty Nail",
    "image_path": "rustynail",
    "contains_alcohol": true,
    "url":"http://www.esquire.com/food-drink/drinks/recipes/a3796/rusty-nail-drink-recipe/",
    "genres": ["action", "adventure", "western", "war", "horror"]
  },
  {
    "name": "Irish Car Bomb",
    "image_path": "carbomb",
    "contains_alcohol": true,
    "url":"https://www.liquor.com/recipes/the-irish-car-bomb/#gs.iIMt1Ts",
    "genres": ["action", "adventure", "war", "drama"]
  },
  {
    "name": "Tom Collins",
    "image_path": "tomcollins",
    "contains_alcohol": true,
    "url":"https://www.liquor.com/recipes/tom-collins-2/#gs.pp1LiK0",
    "genres": ["mystery", "drama", "adventure", "history"]
  },
  {
    "name": "Boilermaker",
    "image_path": "boilermaker",
    "contains_alcohol": true,
    "url":"https://www.liquor.com/recipes/boilermaker/#gs.EkZ9tqI",
    "genres": ["action", "adventure", "fantasy", "western", "war", "horror"]
  },
  {
    "name": "Whisky Cola",
    "image_path": "whiskycola",
    "contains_alcohol": true,
    "url":"https://www.absolutdrinks.com/en/drinks/whisky-cola/",
    "genres": ["action", "adventure", "comedy", "war"]
  },
  {
    "name": " Sex on the Beach",
    "image_path": "sexonthebeach",
    "contains_alcohol": true,
    "url":"https://stayglam.com/life/top-14-girly-alcoholic-drinks/",
    "genres": ["romance", "fantasy", "mystery", "music", "adventure"]
  },
  {
    "name": "Sangria",
    "image_path": "sangria",
    "contains_alcohol": true,
    "url":"https://stayglam.com/life/top-14-girly-alcoholic-drinks/",
    "genres": ["romance", "music", "adventure"]
  },
  {
    "name": "Stawberry Daiquiri",
    "image_path": "stawberrydaiquiri",
    "contains_alcohol": true,
    "url":"https://stayglam.com/life/top-14-girly-alcoholic-drinks/",
    "genres": ["comedy", "adventure"]
  },
  {
    "name": "Godfather",
    "image_path": "godfather",
    "contains_alcohol": true,
    "url":"https://www.liquor.com/recipes/godfather/",
    "genres": ["horror", "drama", "action", "history", "adventure", "documentary"]
  },
  {
    "name": "Old Fashioned",
    "image_path": "oldfashioned",
    "contains_alcohol": true,
    "url":"https://www.liquor.com/recipes/bourbon-old-fashioned/#gs.eQ4Mfgk",
    "genres": ["mystery", "war", "history", "documentary", "western"]
  },
  {
    "name": "Bloody Mary",
    "image_path": "bloodymary",
    "contains_alcohol": true,
    "url":"https://www.liquor.com/recipes/classic-bloody-mary/",
    "genres": ["horror", "war", "drama"]
  },
  {
    "name": "Java the Hutt",
    "image_path": "javathehutt",
    "contains_alcohol": true,
    "url":"https://www.liquor.com/recipes/java-the-hutt/#gs.kSqNxuk",
    "genres": ["scifi", "drama", "action", "fantasy"]
  },
  {
    "name": "Mojito",
    "image_path": "mojito",
    "contains_alcohol": true,
    "url":"https://www.liquor.com/recipes/mojito/",
    "genres": ["comedy", "music", "fantasy"]
  },
  {
    "name": "Pina Colada",
    "image_path": "pinacolada",
    "contains_alcohol": true,
    "url":"http://finedinelove.com/8-cocktails-that-are-a-girls-best-friend/",
    "genres": ["comedy", "romance", "music", "adventure"]
  },
  {
    "name": "Lavender Lemonade",
    "image_path": "lavenderlemonade",
    "contains_alcohol": false,
    "url":"http://www.townandcountrymag.com/leisure/drinks/how-to/g785/best-mocktail-recipes/",
    "genres": ["romance", "family", "music"]
  },
  {
    "name": "Ginger Peach Soda",
    "image_path": "peachsoda",
    "contains_alcohol": false,
    "url":"http://www.townandcountrymag.com/leisure/drinks/how-to/g785/best-mocktail-recipes/",
    "genres": ["comedy", "family", "music", "western"]
  },
  {
    "name": "Raspberry Bee's Knees",
    "image_path": "beesknees",
    "contains_alcohol": false,
    "url":"http://www.townandcountrymag.com/leisure/drinks/how-to/g785/best-mocktail-recipes/",
    "genres": ["romance", "comedy", "family", "music"]
  },
  {
    "name": "Nice Pear",
    "image_path": "nicepear",
    "contains_alcohol": false,
    "url":"http://www.townandcountrymag.com/leisure/drinks/how-to/g785/best-mocktail-recipes/",
    "genres": ["comedy", "family", "music", "mystery"]
  },
  {
    "name": "Tea Time",
    "image_path": "teatime",
    "contains_alcohol": false,
    "url":"http://www.townandcountrymag.com/leisure/drinks/how-to/g785/best-mocktail-recipes/",
    "genres": ["teatime", "western", "family", "music"]
  },
  {
    "name": "Pineapple Ginger Beer",
    "image_path": "pineapplebeer",
    "contains_alcohol": false,
    "url":"http://www.townandcountrymag.com/leisure/drinks/how-to/g785/best-mocktail-recipes/",
    "genres": ["western", "comedy", "family", "music"]
  },
  {
    "name": "Poison Apple",
    "image_path": "poisonapple",
    "contains_alcohol": true,
    "url":"https://www.brit.co/cocktails-halloween-movies-tv/",
    "genres": ["mystery", "horror", "music", "drama"]
  },
  {
    "name": "Bride of Frakenstein",
    "image_path": "frankenstein",
    "contains_alcohol": true,
    "url":"https://www.brit.co/cocktails-halloween-movies-tv/",
    "genres": ["horror", "drama", "mystery"]
  },
  {
    "name": "The Red Queen",
    "image_path": "redqueen",
    "contains_alcohol": true,
    "url":"https://www.brit.co/cocktails-halloween-movies-tv/",
    "genres": ["horror", "drama", "war", "documentary", "history", "mystery"]
  },
  {
    "name": "Infected Brain Cocktail",
    "image_path": "infectedbrain",
    "contains_alcohol": true,
    "url":"https://www.brit.co/cocktails-halloween-movies-tv/",
    "genres": ["horror", "drama", "scifi", "mystery"]
  },
  {
    "name": "The Countess Cocktail",
    "image_path": "countless",
    "contains_alcohol": true,
    "url":"https://www.brit.co/cocktails-halloween-movies-tv/",
    "genres": ["horror", "drama", "war", "documentary", "history", "mystery"]
  },
  {
    "name": "Sparkle Punch",
    "image_path": "sparklepunch",
    "contains_alcohol": false,
    "url":"http://www.delish.com/cooking/recipes/a48090/sparkle-punch-recipe/",
    "genres": ["family", "music", "romance", "comedy"]
  },
  {
    "name": "Mai Tai",
    "image_path": "paitai",
    "contains_alcohol": true,
    "url":"",
    "genres": ["comedy", "adventure", "history"]
  },
  {
    "name": "Oilman",
    "image_path": "oilman",
    "contains_alcohol": true,
    "url":"http://www.elledecor.com/life-culture/food-drink/g3159/halloween-cocktails/",
    "genres": ["horror", "drama", "war", "documentary", "history", "mystery"]
  },
  {
    "name": "Four Hoursemen Shot",
    "image_path": "fourhorsemen",
    "contains_alcohol": true,
    "url":"https://www.liquor.com/recipes/four-horsemen/",
    "genres": ["mystery", "war", "drama", "history", "documentary", "horror"]
  },
  {
    "name": "Dead Man Walking Shot",
    "image_path": "deadmanwalking",
    "contains_alcohol": true,
    "url":"http://www.drinksmixer.com/drink11462.html",
    "genres": ["mystery", "war", "drama", "history", "documentary", "horror"]
  }
]


var drink = {};
// get random drink
function getDrink(genre) {
  // find random drink from array
  var random = drinks[Math.floor(Math.random()*drinks.length)];
  // see if the genre matches
  var index = random.genres.indexOf(genre);
  if (index === -1) {
    getDrink(genre); // start over
  } else {
    main.currentPairing.drink.name = random.name;
    main.currentPairing.drink.image_path = random.image_path;
    main.currentPairing.drink.url = random.url; 
    // adds drink to the page
    renderDrink();
  }
}


// takes main.currentPairing.drink and renders it on our page
function renderDrink(){
  // clear drink on our page now
  $('.drinks-view').html('');
  // drink name
  $('.drink-title').html('');
  $('.drink-title').append(main.currentPairing.drink.name + '<br>');
  // drink image
  var image = $("<img>").attr("src", 'images/drinks/drinks_' +main.currentPairing.drink.image_path + '.png');
  image.css("width", "185px");
  image.appendTo('.drinks-view');
  // drink link
  a = $("<a>")
  a.prop("href", main.currentPairing.drink.url);
  a.attr('target','_blank');
  a.addClass("btn btn-info"); // bootstrap button classes
  i = $("<i>").addClass("fas fa-link"); // font awesome icon
  a.html(i);
  a.appendTo('.drinks-view');
}
