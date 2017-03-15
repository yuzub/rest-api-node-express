var express = require('express');


var app = express();

var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
	res.send('welcome to our API');
});

app.listen(port, function() {
	console.log('Gulp is running app on PORT ' + port);
});