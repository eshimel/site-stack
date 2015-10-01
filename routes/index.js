/*jslint node: true */
'use strict';



var express = require('express');
var request = require('request');

// define the logger
var logger = require('morgan');

// the Router subclass to be exported
var router = express.Router();

//var Article = require('../models/article');

/* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('spot-user', { user: req.user });
//});
//

var url = 'http://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&limit=10&user=ianpants&api_key=57ee3318536b23ee81d6b27e36997cde&format=json';


// logging middleware for debug
router.use(logger('dev'));


//var options = {
//  host: 'http://ws.audioscrobbler.com/2.0/',
//  port: 80,
//  path: '?method=user.getRecentTracks&limit=1&user=ianpants&api_key=57ee3318536b23ee81d6b27e36997cde&format=json',
//  method: 'POST'
//};


function getData(callback) {
    request(url, function (err, res, body) {
        if (!err && res.statusCode == 200) {
          callback(null, res.body);
        } else {
          callback(res.statusCode);
        }
    });
}


/* GET home page. */
router.get('/', function(req, res, next) {
    getData(function (err, data) {
      if (err) {
        return next(err);
      }
      var jdata = JSON.parse(data);
      console.log(jdata.recenttracks.track[0].artist);
      res.render('index', {title: 'Home', data: jdata });
    });
});


module.exports = router;
