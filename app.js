const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const MongoDB = require('./utils/mongodb-cofig');
const mongoose = require('mongoose');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(3000, async () => {
  await MongoDB();
  console.log(':::> Server is running on port 3000');
});
