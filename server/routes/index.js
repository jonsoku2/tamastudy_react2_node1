const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  //console.log(req);
  //console.log(res);
  //console.log(next); //undefined
  throw Error('postError');
  res.json({ success: true, message: 'connected succesfully!' });
});

router.get('/post', (req, res, next) => {
  const post = [
    {
      id: 1,
      title: 'sample'
    },
    {
      id: 2,
      title: 'hihi'
    }
  ];
  res.json({ success: true, data: post, message: 'connected succesfully!' });
});

module.exports = router;
