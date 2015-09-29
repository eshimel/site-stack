/*jslint node: true */
'use strict';



var express = require('express');
var request = require('request');
var router = express.Router();

//var Article = require('../models/article');

/* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('spot-user', { user: req.user });
//});
//

var url = 'http://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&limit=1&user=ianpants&api_key=57ee3318536b23ee81d6b27e36997cde&format=json';

//var options = {
//  host: 'http://ws.audioscrobbler.com/2.0/',
//  port: 80,
//  path: '?method=user.getRecentTracks&limit=1&user=ianpants&api_key=57ee3318536b23ee81d6b27e36997cde&format=json',
//  method: 'POST'
//};


function getData(callback) {
    request(url, function (err, res, body) {
        if (err) {
          return callback(err);
        }

        if (!err && res.statusCode == 200) {
          console.log(body); // Show the HTML for the Google homepage.
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
      res.render('index', {title: 'Home', data: data });
    });
});



/* GET home page. */
router.get('/sample', function(req, res, next) {
  res.send('pancakes!');
});





module.exports = router;
