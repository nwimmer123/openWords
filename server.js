var express = require('express');
var app = express();
var fs = require('fs');
var readline = require('readline');

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