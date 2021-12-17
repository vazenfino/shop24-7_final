

const mongoose = require('mongoose');
const URI ="mongodb+srv://root:root@cluster0.fni51.mongodb.net/shop24x7?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  console.log('db connected..!');
};

connectDB();
