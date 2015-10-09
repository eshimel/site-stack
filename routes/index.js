/*jslint node: true */
'use strict';


var fs = require('fs');
var express = require('express');
var request = require('request');


// define the logger
var logger = require('morgan');

// the Router subclass to be exported
var router = express.Router();

var lastfm = {
  url: "http://ws.audioscrobbler.com/2.0/",
  method: "artist.getInfo",
  artist: "Jenny Wilson",
  api_key: "57ee3318536b23ee81d6b27e36997cde"

}

var recentTracksUrl = 'http://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&limit=20&user=ianpants&api_key=57ee3318536b23ee81d6b27e36997cde&format=json';
var trackInfoUrl = 'http://ws.audioscrobbler.com/2.0/?method=track.getInfo&mbid=a44b0930-87a7-49ed-920c-3fcabc889eac&api_key=57ee3318536b23ee81d6b27e36997cde&format=json';

//var url = lastfm['url']+'?'+lastfm['method'];
var url;


//for (var key in lastfm) {
//  if (lastfm.hasOwnProperty(key)) {
//    console.log(key + " -> " + lastfm[key]);
//  }
//}
//
//var buildUrl = function(data){
//  console.log(data);
//  for (var key in data) {
//    if (key === "url")
//      url += data['url'];
//    else if (data.hasOwnProperty(key)) {
//      url += '&' + key + '=' + data[key];
//    }
//  }
//}
//
//var useIt = function(callback){
//  callback(lastfm); 
//}
//
//buildUrl(useIt);
//
//
//
//var myCallback = function(data) {
//  console.log('got data: '+data);
//};
//
//var usingItNow = function(callback) {
//  callback('get it?');
//};
//
//usingItNow(myCallback);
//


//buildUrl()
//console.log(url);

//http://ws.audioscrobbler.com/2.0/?method=artist.getInfo&artist=&api_key=57ee3318536b23ee81d6b27e36997cde&format=json

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

//router.get('/test', function( req, res, next ) {
//  getRecentTracks(function (err, data) {
//      if (err) {
//        return next(err);
//      }
//      //var jdata = JSON.parse(data);
//      //console.log(data);
//      res.render('test', {title: 'Home', data: JSON.parse(data) });
//    });
//});


module.exports = router;
