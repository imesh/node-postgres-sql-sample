const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const orders = require('./server/routes/orders');
const orderItems = require('./server/routes/orderitems');
const Sequelize = require('sequelize');

const app = express();
const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/orders');

app.use(logger('dev'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(cookieParser());

app.use('/', orders);
app.use('/', orderItems);

module.exports = app;
