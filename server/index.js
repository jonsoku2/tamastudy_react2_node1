const express = require('express'); //import express from 'express'
const morgan = require('morgan');
const router = require('./routes/index');
const errorResponse = require('./middlewares/errorResponse');
const colors = require('colors');
require('dotenv').config();
const app = express();

//const port = process.env.PORT;

console.log(app);

app.use(morgan('dev'));

//routes
app.use(router);

//error response middleware
app.use(errorResponse);

app.listen(process.env.PORT, () => {
  console.log(`${process.env.PORT} is mounted`.bgCyan.blue);
});
