var express = require('express');
var Twitter = require('twitter');
var http = require('http');
var fs = require('fs');
var app = express();

app.get('/:username', function(request, response) {

var username = request.params.username;
var params = {screen_name: username};
var client = new Twitter({

  consumer_key: 'b1LnGgBvIM9tEYWJeU5HjyBwQ',
  consumer_secret: 'ibTobMXPQk6fBCFixCxc9wVDbMV5Gl25PdZfZXVuSBuQgKpXMl',
  access_token_key: '728958375443189761-RvopIp6Ci1f7GYR9aLsJRvqqQINic95',
  access_token_secret: 'UI344Bf7Erca3cD4kEYZ1s5IVXoH6WS1QKxFFkYmH0s83'

});



client.get('statuses/user_timeline.json', params, function(error, tweets, response) {
//client.get('direct_messages/sent.json', params, function(error, tweets, response) {

  if (!error) {

    //console.log(tweets);
    //var tweets = JSON.parse(body);
    //request(url, function(err, res, body) {
    //	var tweets = JSON.parse(body);
    //})

    console.log(tweets);

    //console.log(response);

    //response.locals = {tweets: tweets, name: username};

    //console.log(response);

  }

});


//client.get('favorites/list', function(error, tweets, response) {

  //if(error) throw error;
  //var favorite_data = tweets;
  //console.log(favorite_data);
  //console.log(tweets);  // The favorites. 
  //console.log(response);  // Raw response object. 
//});
//console.log(params);

response.send("Client search for " + username + "\n");

//response.send(favorite_data);

});

app.listen(8900);
