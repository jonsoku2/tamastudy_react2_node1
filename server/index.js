const express = require('express');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.get('/', (req, res) => {
  res.json({ success: true, message: '접속완료' });
});

const server = app.listen(process.env.PORT, () =>
  console.log(`${process.env.PORT}번으로 Node API 가동 중입니다. `),
);

// Handle unhandled promise rejections 처리되지 않은 약속 거부 처리
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit process
  server.close(() => process.exit(1));
});
