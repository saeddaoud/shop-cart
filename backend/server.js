import express from 'express';
import dotenv from 'dotenv';

import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';

dotenv.config();

const app = express();

// connect to DB
connectDB();

// routes
app.use('/api/products', productRoutes);

// Error Middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
