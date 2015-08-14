var express = require('express');
var request = require('request');
var mongoose = require('mongoose')
var wikipedia = require('wikipedia-js');
var flash    = require('connect-flash');
var router = express.Router();

var User   = require('../models/user'); // get our mongoose model

//var db = mongoose.connect('mongodb://localhost:27017/test');


var query = "Napoleon Bonaparte";
var options = {query: query, format: "html", summaryOnly: true};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ian Cullinane' });
});

/* GET home page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Ian Cullinane' });
});


router.get('/login', function(req, res, next) {
  // render the page and pass in any flash data if it exists
  res.render('login'); 
});





router.get('/setup', function(req, res) {

  // create a sample user
  var nick = new User({ 
    name: 'Ian Cullinane', 
    password: 'password',
    admin: true 
  });

  // save the sample user
  nick.save(function(err) {
    if (err) throw err;

    console.log('User saved successfully');
    res.json({ success: true });
  });
});


module.exports = router;
