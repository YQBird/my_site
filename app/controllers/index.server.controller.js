exports.render = function(req, res) {
    res.render('index', {
        title: 'Welcome to home page',
        user: req.user ? req.user.username : 'Who are you?'
    });
};