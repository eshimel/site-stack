// app/models/user.js
// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model
var roosterSchema = mongoose.Schema({

    username: String,
    level: String,

    local            : {
        email        : String,
        password     : String,
    },
    facebook         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },
    twitter          : {
        id           : String,
        token        : String,
        displayName  : String,
        username     : String
    },
    google           : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    }

});



// methods ======================
// generating a hash
roosterSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
roosterSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

roosterSchema.methods.count = function(obj) {
    var count = 0;

    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            ++count;
    }

    return count;
}

// create the model for users and expose it to our app
module.exports = mongoose.model('Roosterite', roosterSchema);
