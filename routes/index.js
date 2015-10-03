/*jslint node: true */
'use strict';


var fs = require('fs');
var express = require('express');
var request = require('request');


// define the logger
var logger = require('morgan');

// the Router subclass to be exported
var router = express.Router();

//var Article = require('../models/article');



var obj;
fs.readFile('test/test-data.js', 'utf8', function (err, data) {
  if (err) throw err;
  console.log(data);
  obj = JSON.parse(data);
});



/* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('spot-user', { user: req.user });
//});
//

var recentTracksUrl = 'http://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&limit=20&user=ianpants&api_key=57ee3318536b23ee81d6b27e36997cde&format=json';


// logging middleware for debug
router.use(logger('dev'));


//var options = {
//  host: 'http://ws.audioscrobbler.com/2.0/',
//  port: 80,
//  path: '?method=user.getRecentTracks&limit=1&user=ianpants&api_key=57ee3318536b23ee81d6b27e36997cde&format=json',
//  method: 'POST'
//};


function getRecentTracks(callback) {
    request(recentTracksUrl, function (err, res, body) {
        if (!err && res.statusCode == 200) {
          callback(null, res.body);
        } else {
          callback(res.statusCode);
        }
    });
}


/* GET home page. */
router.get('/', function( req, res, next ) {
    getRecentTracks(function (err, data) {
      if (err) {
        return next(err);
      }
      //var jdata = JSON.parse(data);
      //console.log(data);
      res.render('index', {title: 'Home', data: JSON.parse(data) });
    });
});

router.get('/test', function( req, res, next ) {
  getRecentTracks(function (err, data) {
      if (err) {
        return next(err);
      }
      //var jdata = JSON.parse(data);
      //console.log(data);
      res.render('test', {title: 'Home', data: JSON.parse(data) });
    });
});


module.exports = router;
