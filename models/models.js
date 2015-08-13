var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

mongoose.connect('mongodb://localhost:27017/test');

var UserAccount = new Schema({
    user_name       : { type: String, required: true, lowercase: true, trim: true, index: { unique: true } }, 
    password        : { type: String, required: true },
    date_created    : { type: Date, required: true, default: Date.now }
}); 

var Product = new Schema({
    upc             : { type: String, required: true, index: { unique: true } },
    description     : { type: String, trim: true },
    size_weight     : { type: String, trim: true }
});