$(document).ready(function(){
  console.log("Hi Mother Fucker");

  $("#generate").on("click", function() {
    getAttributes();
    //getTxt();
  });

});

getTxt = function (){
  var language = $("#language").val();
  $.ajax({
    url: "languages/" + language + ".txt",
    success: function (data){
      data = data.split(/\r?\n/)
      console.log(data)
    }
  })
};

function getAttributes() {
  var numWords = $("#numWords").val();
  var minLetters = $("#minNum").val();
  var maxLetters = $("#maxNum").val();
}

