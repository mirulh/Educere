import express from 'express';
import data from '../Data_Users.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRouter from '../routes/userRoutes.js';
import contentRouter from '../routes/contentRoutes.js';
import uploadRouter from '../routes/uploadRoutes.js';
import submissionRouter from '../routes/submissionRoutes.js';
import dashboardRouter from '../routes/dashboardRoutes.js';
import path from 'path';
import seedRouter from '../routes/seedRoutes.js';
import seedRouter2 from '../routes/seedRoutes2.js';

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
    console.log('connected to EducereDB');
  })
  .catch((err) => {
    console.log(err.message);
  });

// express async handler error handling middleware
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

// middlewares

app.use('/api/users', userRouter);
app.use('/api/contents', contentRouter);
app.use('/api/upload', uploadRouter);
app.use('/api/submissions', submissionRouter);
app.use('/api/dashboard', dashboardRouter);

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

// app.use('/api/seed', seedRouter);
// app.use('/api/seed2', seedRouter2);

// middleware for hosting
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/frontend/dist')));

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/frontend/dist/index.html'))
);
