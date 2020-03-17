const express = require('express');
const app = express();
const logger = require('morgan');
const path = require('path');

var postsRouter = require('./routes/post.js');

app.use('/posts', postsRouter);
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, '../public')))


module.exports = app;