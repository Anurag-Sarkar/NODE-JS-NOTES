# Understanding NODE Js Structure
#
#### 1. bin folder
- bin folder contains www.js file while in used to initialise the server and tell it to run server on which port
#
#### 2.public folder
- public folder contains all the static files like images stylesheets and javascript

#
#### 3. routes folder
- routes folder contains the javascript file with function for each required route
- _eg: for "/" route it have a function to display the indexpage_

#
#### 4. views folder
- views folder contains the ejs (html) file to be rendered on specific route

#
#### 5. app.js
- This is the boiler plate of the server

#
#### 6. package.lock.json 
- It contains details about each package installed in the folder, like its version, location in web, etc

#
#### 7. package.json
- It contains details about the server and name of all packages installed
#
#
# Understanding Boilerplate
#
##### **"createError" is used to handle error**
##### **"express" is used to run the server**
##### **"path" is used to get path/location of files**
##### **"cookieParser" is used to handle cookies (We will talk about it later)**
##### **"logger" when u start your server the initial messages and which route is currently its on all these details are shown by logger**
    var createError = require('http-errors');
    var express = require('express');
    var path = require('path');
    var cookieParser = require('cookie-parser');
    var logger = require('morgan');

##### **indexRouter is a variable where the index.js file location is saved**
##### **usersRouter is a variable where the index.js file location is saved**
    var indexRouter = require('./routes/index');
    var usersRouter = require('./routes/users');

##### **We save express functions in a variable called app**
`var app = express();`

##### **We set the views folder to the location of views folder**
##### **We set view engine to use EJS**
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'jade');

**It tells app to use logger in dev mode**
`app.use(logger('dev'));`

**It tells app to use to parse data in JSON format for POST request**
`app.use(express.json());` 

**It tells app to use to parse data in encoded format for POST form data**
`app.use(express.urlencoded({ extended: false }));` 

**It tells app to use cookie parser to parse cookies**
`app.use(cookieParser());` 

**It tells app to use public folder for images, stylesheets and javascript files**
`app.use(express.static(path.join(__dirname, 'public')));` 

##### **It redirects all "/" routes to indexRouter page**
##### **It redirects all "/user" routes to userRouter page**
`app.use('/', indexRouter);`
`app.use('/users', usersRouter);`

##### **catch 404 and forward to error handler**
    app.use(function(req, res, next) {
      next(createError(404));
    });


##### **error handler**
`app.use(function(err, req, res, next) {`
##### **set locals, only providing error in development**
  `res.locals.message = err.message;`
  `res.locals.error = req.app.get('env') === 'development' ? err : {};`

##### **render the error page**
  `res.status(err.status || 500);`
  `res.render('error');`

##### **exported the app to be used in other files**
`module.exports = app;`





