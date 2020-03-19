const express = require('express');
const app = express();
const logger = require('morgan');
const parser = require('body-parser');
const path = require('path');

app.use(logger('dev'));
app.use(parser.urlencoded());


const postsRouter = require('./routes/post.js');
app.use('/post', postsRouter);

app.use(express.static(path.join(__dirname, '../public')))


module.exports = app;