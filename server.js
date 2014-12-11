var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var socket = require('./src/socketController.js')(io);

app.set('view engine', 'ejs');

app.use(express.static(__dirname + 'public'));

app.get('/yo', function(request, response) {
	response.render('yo');
});

server.listen(3000, function() {
	console.log("Server listening on port 3000");
});

