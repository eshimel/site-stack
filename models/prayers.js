// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('Prayer', new Schema({ 
    prayer: String, 
    user_id: Number, 
    date: { type: Date, default: Date.now },
}));