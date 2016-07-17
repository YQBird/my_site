// environment variable setting
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require('./config/config');
var mongoose = require('./config/mongoose');
var express = require('./config/express');
var passport = require('./config/passport');

var db = mongoose();
var passport = passport();
var app = express();


app.listen(config.port);

module.exports = app;

console.log(process.env.NODE_ENV + 'Server running at http://localhost:' + config.port);

