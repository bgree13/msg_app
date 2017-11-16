var twitter = require('ntwitter'),
    express = require('express'),
    http = require('http'),
    config = require('./config');
    streamHandle = require('./streamHandle');

// Create an express instance and set a port variable
var app = express();
var port = process.env.PORT || 3000;

// Create website root
//app.get('/', function (req, res) {
//    res.send('Site Dev in Progress')
//})

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
})

app.get('/angular', function (req, res) {
  res.sendFile(__dirname + '/index1.html');
})

// Create new ntwitter instance
var twit = new twitter(config.twitter);

// Start the server
var server = http.createServer(app).listen(port, function() {
  console.log('Express server listening on port ' + port);
});

// Initialize socket.io
var io = require('socket.io').listen(server);

// Verify twitter Credentials from config file
twit.verifyCredentials(function (err, data) {
    if (!err)
        console.log("Connection: Success");
    else
        console.log("Error:", err.message)
})

twit.stream('statuses/filter', { track: 'Fuck'}, function(stream){
    streamHandle(stream, io)
});


//stream.on('data', function (data) {
    //console.log(data.text)
//});
