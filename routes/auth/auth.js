var express = require('express'),
    passport = require('passport'),
    router = express.Router();

// Our Auth routes (Section 3)

// GET /auth/openid
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in OpenID authentication will involve redirecting
//   the user to their OpenID provider.  After authenticating, the OpenID
//   provider will redirect the user back to this application at
//   /auth/openid/return

router.get('/openid',
    passport.authenticate('azuread-openidconnect', {
        failureRedirect: '/login'
    }),
    function (req, res) {
        console.log('Authenitcation was called in the Sample');
        res.redirect('/');
    });

// GET /auth/openid/return
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
router.get('/openid/return',
    passport.authenticate('azuread-openidconnect', {
        failureRedirect: '/failed'
    }),
    function (req, res) {
        res.redirect('/');
    });

// POST /auth/openid/return
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.

router.post('/openid/return',
    passport.authenticate('azuread-openidconnect', {
        failureRedirect: '/failed'
    }),
    function (req, res) {
        res.redirect('/success');
    });

module.exports = router;
