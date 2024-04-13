import express from 'express';
import data from '../Data.js';
import User from '../models/userModel.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  await User.deleteMany({});
  const seededUsers = await User.insertMany(data.users);
  res.send({ seededUsers });
});

export default seedRouter;
