const express = require('express');
const app = express();
const logger = require('morgan');
const parser = require('body-parser');
const path = require('path');
const User = require('../models/user.js')
const knex = require('../knex/migrations/20200404112636_create-users-table');

knex.down();
knex.up();

app.use(logger('dev'));
app.use(parser.json());
app.use(parser.urlencoded({extended: false}));


app.post('/signup', User.signup)
app.post('/signin', User.signin)
app.post('/signin/token', User.signinByToken)
app.post('/saved-articles', User.saveArticle);
app.post('/saved-articles/get-all', User.getSavedArticles)
app.post('/saved-articles/delete', User.deleteSavedArticle);

app.use(express.static(path.join(__dirname, '../public')))



module.exports = app;