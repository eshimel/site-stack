//databes module
var mongoose = require('mongoose'); 

// load up the user model
var Rooster = require('../models/roosterite');
var Prayer = require('../models/prayers');

var db = mongoose.connection;


// app/routes.js
module.exports = function(app, passport) {


    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.get('/', function(req, res, next) {
        Rooster.find({}, function(err, roosters) {
        var roosterMap = {};

        roosters.forEach(function(rooster){
            roosterMap[rooster.username] = rooster;
        });

        res.render('index', {
            user : req.user,
            roosters : JSON.parse(JSON.stringify(roosterMap))
        });
    });
    });

    
    // =====================================
    // LOGIN ===============================
    // =====================================
    // show the login form
    app.get('/login', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('login', { message: req.flash('loginMessage') }); 
    });

    // process the login form
    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/convert', // redirect back to the /convert page if there is an error
        failureFlash : true // allow flash messages
    }));

    // =====================================
    // /Convert=============================
    // =====================================
    // show the /convert form
    app.get('/convert', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('convert', { message: req.flash('signupMessage') });
    });

    // process the /convert form
    // app.post('//convert', do all our passport stuff here);

    // =====================================
    // PROFILE SECTION =====================
    // =====================================
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile', {
            user : req.user // get the user out of session and pass to template
        });
    });


    app.get('/prayerwall', function(req, res, next){

        Prayer.find({}, function(err, prayers) {
        var prayerMap = {};

        prayers.forEach(function(prayer){
            prayerMap[prayer.prayer] = prayer;
        });

        res.render('prayer', {
            user : req.user,
            message: req.flash('signupMessage'),
            prayers : JSON.parse(JSON.stringify(prayerMap))
        });
    })
    })



    app.post('/prayerwall', function(req, res) {

        new Prayer({prayer : req.body.prayer})
        .save(function(err, prayer) {
            res.render('prayeraccept', {
                message: req.flash('signupMessage')          
            })
        });

    });





    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });



    // process the /convert form
    app.post('/convert', passport.authenticate('local-signup', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/convert', // redirect back to the /convert page if there is an error
        failureFlash : true // allow flash messages
    }));
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}
