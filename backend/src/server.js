import express from 'express';
import data from '../Data.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import seedRouter from '../routes/seedRoutes.js';

const app = express();

// test backend

app.get('/api/test', (req, res) => {
  res.send(data.users);
});

// connect to mongoDB using .env URI file

dotenv.config();
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to Educere db');
  })
  .catch((err) => {
    console.log(err.message);
  });

// test seed data to the mongoDB database

app.use('/api/seed', seedRouter);

// middlewares

// app.use();

// define port
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
