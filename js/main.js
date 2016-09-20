$(document).ready(function(){
  console.log("Titties!!");

  var filename = process.argv[2];
  readline.createInterface({
      input: fs.createReadStream(filename),
      terminal: false
  }).on('line', function(line) {
     console.log('Line: ' + line);
  });

});