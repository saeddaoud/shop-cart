import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

import mongoose from 'mongoose';

const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

const getSingleProduct = asyncHandler(async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id))
    throw new Error('Not a valid ObjectID');

  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    throw new Error('Product not Found');
  }
});

export { getAllProducts, getSingleProduct };
