
// Importing all the needed libraries

// "createError" is used to handle error
var createError = require('http-errors');
// "express" is used to run the server
var express = require('express');
// "path" is used to get path/location of files
var path = require('path');
// "cookieParser" is used to handle cookies (We will talk about it later)
var cookieParser = require('cookie-parser');
// "logger" when u start your server the initial messages and which route is currently its on all these details are shown by logger
var logger = require('morgan');

// indexRouter is a variable where the index.js file location is saved
// usersRouter is a variable where the index.js file location is saved

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// We save express functions in a variable called app

var app = express();

// We set the views folder to the location of views folder
app.set('views', path.join(__dirname, 'views'));
// We set view engine to use EJS
app.set('view engine', 'jade');


// It tells app to use logger in dev mode
app.use(logger('dev'));
// It tells app to use to parse data in JSON format for POST request
app.use(express.json());
// It tells app to use to parse data in encoded format for POST form data
app.use(express.urlencoded({ extended: false }));
// It tells app to use cookie parser to parse cookies
app.use(cookieParser());
// It tells app to use public folder for images, stylesheets and javascript files
app.use(express.static(path.join(__dirname, 'public')));

// It redirects all "/" routes to indexRouter page
app.use('/', indexRouter);
// It redirects all "/user" routes to userRouter page
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
