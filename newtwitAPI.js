var Twit = require('twit')
var T = new Twit({
    consumer_key:         'OQwfxQzPOZ5iEBhRpv0UuVg6C',
    consumer_secret:      'piV56j1K0K5jAPSf3Dq64Gro613SCqNXHtmHAJN7kdG2Ec2xhk',
    access_token:         '728958375443189761-zuc3asrcEEDptPsLbC9gKoVmFr84W1d',
    access_token_secret:  'kx0R8ui9kINBvT5I1d3LQIGOi1ERU3kTDBDyHb9Jbf9gI'
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