const mongoose = require('mongoose');

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  });

  console.log('몽고DB가 연결되었습니다.'.cyan.underline.bold);
  console.log(`${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;
