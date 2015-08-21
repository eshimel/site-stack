// use the server
var express = require('express');

// require frontend modules
var stylus = require('stylus');
var nib = require('nib');
var path = require('path');
var favicon = require('serve-favicon');

// define the logger
var logger = require('morgan');

// Parsers TODO: Learn more about these two ubiquitous classes
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//passport and session modules
var flash = require('connect-flash');
var passport = require('passport');
var session      = require('express-session');

//databes module
var mongoose = require('mongoose'); 

// vonfigure modules
var configDB = require('./config/database.js');

// connectd to local mongo db and show status
mongoose.connect(configDB.url, function (err, res) {
  if (err) {
  console.log ('ERROR connecting' + '. ' + err);
  } else {
  console.log ('Succeeded connecting');
  }
})
// pass passport for configuration
require('./config/passport')(passport); 


//var routes = require('./routes/index');
//var users = require('./routes/users');

// set the app as the express module
var app = express();

// set up for jade templating
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// use the static page stuffs
app.use(express.static(path.join(__dirname, 'public')));

// use the modular routes
//app.use('/', routes);
//app.use('/users', users);


// required for passport
app.use(session({ secret: 'graceofhisbeak' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session


// load the routes file, and pass in the passport module
require('./routes/routes.js')(app, passport);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});






// export the app to be used
module.exports = app;
