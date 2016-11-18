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

// function getAttributes() {
//   var numWords = $("#numWords").val();
//   var minLetters = $("#minNum").val();
//   var maxLetters = $("#maxNum").val();
// };

function generateArray(data){
  console.log(data);
  console.log(arrayAttributes);
};

//store array attributes
 var arrayAttributes = [];
function getAttributes() {
 
  arrayAttributes.push({
    numWords: parseInt($("#numWords").val()),
    minLetters: parseInt($("#minNum").val()),
    maxLetters: parseInt($("#maxNum").val()),
  })
}

