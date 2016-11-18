$(document).ready(function(){
  console.log("Hi Mother Fucker");

  $("#generate").on("click", function() {
    getAttributes();
    getTxt();
  });

});

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

function generateArray(data){
  console.log(arrayAttributes[0].minLetters);
  var finalArray = data.filter(filterByLength);
  console.log(finalArray);
};

function filterByLength(obj) {
  if ((obj.length >= arrayAttributes[0].minLetters) && (obj.length <= arrayAttributes[0].maxLetters)) {
    return true
  } else {
    return false
  }
};

function removeWords(){
  if (this.length < arrayAttributes[0].minLetters) {
    this.slice
  };
  if (this.length > arrayAttributes[0].maxLetters) {
    this.slice
  };
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

