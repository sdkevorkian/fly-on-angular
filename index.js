/* global process, module*/

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var app = express();

mongoose.connect('mongodb://localhost/airplanes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require('morgan')('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/airplanes', require('./controllers/airplane'));

// comes after static, lets us actually get that
// * gets all routes
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});


var server = app.listen(process.env.PORT || 3000);

module.exports = server;
