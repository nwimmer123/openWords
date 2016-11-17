$(document).ready(function(){
  console.log("Hi Mother Fucker");

  getTxt = function (){
    $.ajax({
      url: 'languages/english.txt',
      success: function (data){
        data = data.split(/\r?\n/)
        console.log(data)
      }
    })
  };

  $("#languageSelect").on("click", function() {
    getTxt();
  });

});


