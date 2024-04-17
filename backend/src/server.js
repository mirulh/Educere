import express from 'express';
import data from '../Data.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import seedRouter from '../routes/seedRoutes.js';
import userRouter from '../routes/userRoutes.js';

// !IMPORTANT for structuring JSON on POST API calls. DON'T leave it out!!
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

// middlewares

app.use('/api/users', userRouter);

// define port
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});

// !IMPORTANT it catches all error in express async handler
// app.use((err, req, res, next) => {
//   res.status(500).send({ message: err.message });
// });

// test seed data to the mongoDB database

app.use('/api/seed', seedRouter);
