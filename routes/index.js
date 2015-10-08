var express = require('express'),
    router = express.Router(),
    passport = require('passport');

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', {
        title: 'Please login to Sync Calendar to Slack!',
        loggedIn: false
    });
});

router.get('/success', function (req, res) {
    res.render('index', {
        title: 'Logged in! o365 busy/free time will be sync\'d to slack ',
        loggedIn: true
    });
});

router.get('/failed', function (req, res) {
    res.render('index', {
        title: 'Failed to login, please try again.',
        loggedIn: false
    });
});

router.get('/login', passport.authenticate('azuread-openidconnect', {
        failureRedirect: '/login'
    }),
    function (req, res) {
        console.log('login was called!');
        res.redirect('/success');
    }
);

router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});

module.exports = router;
