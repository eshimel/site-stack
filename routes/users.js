var express = require('express');
var request = require('request');
var mongoose = require('mongoose')
var wikipedia = require('wikipedia-js');
var flash    = require('connect-flash');

var passport = require('passport');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', { title: 'Praise be!' });
});

module.exports = router;
