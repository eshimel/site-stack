var express = require('express');
var request = require('request');
var mongoose = require('mongoose')
var wikipedia = require('wikipedia-js');
var router = express.Router();

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



module.exports = router;
