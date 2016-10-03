var express = require('express');
var fs = require('fs');

var app = express();

var port = 3000;

app.get('/', function( req, res, next ) {
	res.send("Hello World");
});

app.get('/test', function( req, res, next ) {
    fs.readFile('./public/index.html', 'utf8', function(err, text) {
        if(err){
		console.log(err);
	}
	res.send(text);
    });
});

app.listen(port, function () {
    console.log('Server running on port ' + port);
});
