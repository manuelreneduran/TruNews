const express = require('express');
const app = express();
const logger = require('morgan');
const parser = require('body-parser');
const path = require('path');
require('dotenv').config()


app.use(logger('dev'));
app.use(parser.json());
app.use(parser.urlencoded({extended: false}));


const postRouter = require('./routes/post.js');
app.use('/post', postRouter);

app.use(express.static(path.join(__dirname, '../public')))

app.get('/*', function(req, res) {
  res.redirect('/');
})

module.exports = app;