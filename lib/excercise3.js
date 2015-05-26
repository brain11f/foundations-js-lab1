/* ----------------- Survey Says...----------------------------------------
 Like any conscientious business, the Woodland Park Zoo collects statistics
 about its animal exhibits. The animalExhibitsStats object is a summary of what
 they found.
*/

// TODO: 4 points
// All of the property names below are surrounded by quotes. Some of the names
// don't require quotes for the code to work. Remove the unnecessary quotes.

// Silence this particular jshint error for this assignment
/*jshint sub:true*/

exports.animalStats = function() {
  // TODO change the way this property is implemented.
  // yes the test passes without changing it, but you won't receive credit
  // unless you actually change implementation below. The tests must still
  // pass after your change
  var animalExhibitStats = {
    numberOpen: 13,
    "number closed": 2,
    "petting-zoo-open": true,
    mostPopular: "Lucky the Emperor Penguin",
    "2ndMostPopular": "Dumbo the Depressed Donkey"
  };
  return animalExhibitStats;
};

/*
 TODO: 4 points
 The animalExhibitStats object is indexed four times below using bracket
 notation. WITHOUT changing any of the property names, replace the bracket
 notation with Dot notation wherever possible.
*/

exports.animalIndexing = function() {
  var animalExhibitStats = {
    numberOpen: 13,
    "number closed": 2,
    "petting-zoo-open": true,
    mostPopular: "Lucky the Emperor Penguin",
    "2ndMostPopular": "Dumbo the Depressed Donkey"
  };
  // TODO change the way we access these properties
  animalExhibitStats.mostPopular = null;
  animalExhibitStats.numberOpen = null;
  return animalExhibitStats;
};
