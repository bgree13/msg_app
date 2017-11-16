module.exports = function(stream, io){

	stream.on('data', function (data) {
		io.sockets.volatile.emit('tweet', {
      		user: data.user.screen_name,
      		text: data.text
    	});	
        //console.log(data.user.screen_name)
        console.log(data.user)
  	});
}