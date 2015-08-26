var express = require('express');

//databes module
var mongoose = require('mongoose'); 

// load up the user model
var Rooster = require('../models/roosterite');
var Prayer = require('../models/prayers');

var db = mongoose.connection;

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
    Rooster.find({}, function(err, roosters) {
        var roosterMap = {};

        roosters.forEach(function(rooster){
            roosterMap[rooster._id] = rooster;
        });

        res.render('wall', {
            roosters : roosterMap
        })

    });


});

module.exports = router;
