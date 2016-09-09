var users = require('../controllers/user.server.controller');
var passport=require("passport");   

module.exports = function(app) {
	app.route('/users').post(users.create).get(users.list);

	app.route('/users/:userId').get(users.read).put(users.update).delete(users.delete);

	app.param('userId', users.userByID);

	app.route('/register')
        .get(users.renderRegister)
        .post(users.register);

    app.route('/login')
        .get(users.renderLogin);

    app.post('/login', passport.authenticate('local'), function(req, res) { 
        res.send(200)}); 

    app.get('/logout', users.logout);
};