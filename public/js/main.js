$(document).ready(function(){
  console.log("Hi Mother Fucker");

  $("#generate").on("click", function() {
    getTxt();
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

