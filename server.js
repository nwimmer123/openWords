var express = require('express');
var app = express();
var html = require('html');

// var fs = require('fs');
// var readline = require('readline');

// var filename = process.argv[2];
// readline.createInterface({
//     input: fs.createReadStream(filename),
//     terminal: false
// }).on('line', function(line) {
//    console.log('Line: ' + line);
// });

// var array = load(filename);

// serve static files from public folder
app.use('/',express.static(__dirname + '/public'));

/**********
 * ROUTES *
 **********/

app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/index.html');
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});