<<<<<<< HEAD
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
=======
const express = require('express')
require('dotenv').config()
const morgan = require('morgan')
const router = require('./routes/index')
const errorResponse = require('./middlewares/errorResponse')
const colors = require('colors')
const app = express()

//! env
const PORT = process.env.PORT || 5000
const MASTER = process.env.NAME || 'TAMASTUDY'

//! log middleware
app.use(morgan('dev'))

//! Route
app.use(router)

//! error response middleware
app.use(errorResponse)

//! running backend server
app.listen(PORT, () => {
    console.log(`${MASTER}의 서버에 접속하셨습니다.${PORT}번 포트로 연결 되었습니다.`.rainbow)
})
>>>>>>> 2b469ec6667422ddfe752ea6a68849b47935b190
