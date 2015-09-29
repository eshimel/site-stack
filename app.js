/**
 * This is an example of a basic node.js script that performs
 * the Authorization Code oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/web-api/authorization-guide/#authorization_code_flow
 */

var express = require('express'); // Express web server framework
var request = require('request'); // "Request" library
var querystring = require('querystring');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var session = require('express-session')
var path = require('path');
var flash = require('connect-flash');

// define the logger
var logger = require('morgan');

// pass passport for configuration
//require('./config/passport-config')(passport); 
var route_handler = require('./routes/index'); 

var app = express();

// required for passport

app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }, resave: true, saveUninitialized: true }))
app.use(passport.initialize());
app.use(passport.session());
app.use(flash()); // use connect-flash for flash messages stored in session

//app.use(express.static(__dirname + '/public'));

// set up for jade templating
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//check user auth first
//app.use(authChecker);

// load the routes file, and pass in the passport module
//require('./routes/passport.js')(app, passport);

app.use('/', route_handler);


console.log('Listening on 8888');
app.listen(8888);






