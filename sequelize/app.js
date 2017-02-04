const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const merchants = require('./server/routes/merchants');
const merchantBranches = require('./server/routes/merchantbranches');
const Sequelize = require('sequelize');

const app = express();
const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/merchants');

app.use(logger('dev'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(cookieParser());

app.use('/', merchants);
app.use('/', merchantBranches);

module.exports = app;
