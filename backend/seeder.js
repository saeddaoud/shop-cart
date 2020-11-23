import Product from './models/productModel.js';
import products from './data/products.js';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log('Data has been imported');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};
const destroyData = async () => {
  try {
    await Product.deleteMany();
    console.log('Data has been destroyed');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
