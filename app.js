var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/batboard')
    .then(() => console.log('Mongo Database Connection Succesful at Port 27017/batboard.'))
    .catch((err) => console.error(err));

var boardRouter = require('./routes/board-routes.js');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist/batboard')));
// Users APIs
app.use('/users', express.static(path.join(__dirname, 'dist/batboard')));
app.use('/users/:id', express.static(path.join(__dirname, 'dist/batboard')));
app.use('/user-create', express.static(path.join(__dirname, 'dist/batboard')));
app.use('/user-edit/:id', express.static(path.join(__dirname, 'dist/batboard')));

// Items APIs
app.use('/items', express.static(path.join(__dirname, 'dist/batboard')));
app.use('/items/:id', express.static(path.join(__dirname, 'dist/batboard')));
app.use('/item-create', express.static(path.join(__dirname, 'dist/batboard')));
app.use('/item-edit/:id', express.static(path.join(__dirname, 'dist/batboard')));

// Board APIs
app.use('/boards', express.static(path.join(__dirname, 'dist/batboard')));
app.use('/boards/:id', express.static(path.join(__dirname, 'dist/batboard')));
app.use('/board-create', express.static(path.join(__dirname, 'dist/batboard')));
app.use('/board-edit/:id', express.static(path.join(__dirname, 'dist/batboard')));

app.use('/api', boardRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.send(err.status);
});

module.exports = app;
