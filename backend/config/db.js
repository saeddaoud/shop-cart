import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MongoDB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB is connected');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDB;
