const express = require('express');
const app = express();
const logger = require('morgan');
const path = require('path');

app.use(logger('dev'));

const postsRouter = require('./routes/post.js');
app.use('/post', postsRouter);

app.use(express.static(path.join(__dirname, '../public')))
// app.use('/',  (req, res)=> {
//   res.sendFile(path.join(__dirname, '../publicindex.html'));
//  });



module.exports = app;