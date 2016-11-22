$(document).ready(function(){

  $("#generate").on("click", function() {
    getAttributes();
    getTxt();
  });

  $("#reset").on("click", function() {
    document.location.reload(true);
  });

});

function display(){
  console.log("In Display");
  words = words.join(", ");
  $("#yourWords").text(words);
  console.log(words);
}

//gets the root word list
function getTxt(){
  var language = $("#language").val();
  $.ajax({
    url: "languages/" + language + ".txt",
    success: function (data){
      data = data.split(/\r?\n/); 
      generateArray(data);
      display();
    }
  })
};

//creating the new array
var words = [];
function generateArray(data){
  var finalArray = data.filter(filterByLength);
  finalArray = shuffle(finalArray);
  for(var i = 0; i < arrayAttributes[0].numWords; i ++) {
    words.push(finalArray[i]);
   }
  return words;
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



