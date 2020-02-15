const errorResponse = (err, req, res, next) => {
  console.error(err);
  res.status(500).json({ success: false, message: 'error occurred!' });
};

module.exports = errorResponse;
