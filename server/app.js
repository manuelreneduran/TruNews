const express = require('express');
const app = express();
const logger = require('morgan');
const path = require('path');

var personsRouter = require('./routes/persons.js');

app.use('/persons', personsRouter);
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, '../public')))


module.exports = app;