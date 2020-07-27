const express = require('express');
const path = require('path');
const logger = require('morgan');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Views
app.use('/', require('./routes'));

// catch 404 and forward to error handler
app.use((_request, _response, next) => {
  const err = new Error('File Not Found');
  err.status = 404;

  next(err);
});

// error handler
app.use((error, request, response) => {
  // set locals, only providing error in development
  response.locals.message = error.message;
  response.locals.error = request.app.get('env') === 'development' ? error : {};

  const errorToReturn = {
    message: error.message,
    status: error.status,
    stack: error.stack,
  };

  response.status(error.status || 500);
  response.json(errorToReturn);
});

module.exports = app;
