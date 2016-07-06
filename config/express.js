var express = require('express');

module.exports = function(req, res) {
	var app = express();

	require('../app/routes/index.server.route.js')(app);

	app.set('views', './app/views');
	app.set('view engine', 'ejs');

    return app;
}