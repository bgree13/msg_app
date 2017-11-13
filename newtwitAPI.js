var Twit = require('twit')
var T = new Twit({
    consumer_key:         'PA0QGKBoQukdqvMZISL5oFPcM',
    consumer_secret:      'z7mgTNIQwBEVW9lEJAfOjuoR3jDMfmkUXtyYfUYE6MTNIhMoWw',
    access_token:         '728958375443189761-RvopIp6Ci1f7GYR9aLsJRvqqQINic95',
    access_token_secret:  'UI344Bf7Erca3cD4kEYZ1s5IVXoH6WS1QKxFFkYmH0s83'
})

//T.get('followers/ids', { screen_name: 'MochaHues' },  function (err, data, response) {
  //console.log(data)
//})

var stream = T.stream('user');

stream.on('favorite', function (favoriteMsg) {
    //console.log("Something was just favorited")
    console.log( "Something was just favorited", favoriteMsg)
    //var id = favoriteMsg.id_str
    //console.log(id)

})

stream.on('unfavorite', function (unfavoriteMsg) {
    //console.log("Something was just favorited")
    console.log( "Something was just unfavorited", unfavoriteMsg)

})

stream.on('direct_message' , function (directMsg) {
    console.log("A message event just occurred", directMsg)
})