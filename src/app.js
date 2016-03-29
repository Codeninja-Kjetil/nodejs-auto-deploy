var express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.send('Hello World!');
});

app.get('/boats', function (req, res) {
	res.json([{id: 1, name: 'Fjodleik'},{id: 2, name: 'Hurtigruten'}]);
});

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});