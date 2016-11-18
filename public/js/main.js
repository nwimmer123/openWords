$(document).ready(function(){
  console.log("Hi Mother Fucker");

  $("#generate").on("click", function() {
    getAttributes();
    getTxt();
    //generateWords();
  });

});

//gets the root word list
function getTxt(){
  var language = $("#language").val();
  $.ajax({
    url: "languages/" + language + ".txt",
    success: function (data){
      data = data.split(/\r?\n/);
      generateArray(data);
    }
  })
};

//creating the new array
function generateArray(data){
  var finalArray = data.filter(filterByLength);
  finalArray = shuffle(finalArray);
  console.log(finalArray);
};

//filters array by desired word length
function filterByLength(obj) {
  if ((obj.length >= arrayAttributes[0].minLetters) && (obj.length <= arrayAttributes[0].maxLetters)) {
    return true
  } else {
    return false
  }
};

//store array attributes
var arrayAttributes = [];
function getAttributes() {
  arrayAttributes.push({
    numWords: parseInt($("#numWords").val()),
    minLetters: parseInt($("#minNum").val()),
    maxLetters: parseInt($("#maxNum").val()),
  })
};

//randomize word array order
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

//populate array w different words for each game
var gameWords = [];
function generateWords() {
  shuffle(array);
  for(var i = 0; i < arrayAttributes[0].numWords; i ++) {
    gameWords.push(words[i]);
   }
}

