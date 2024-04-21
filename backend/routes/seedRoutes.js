import express from 'express';
import data from '../Data.js';
import User from '../models/userModel.js';
import Content from '../models/contentModel.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  await User.deleteMany({});
  const seededUsers = await User.insertMany(data.users);
  await Content.deleteMany({});
  const seededContents = await Content.insertMany(data.contents);
  res.send({ seededUsers, seededContents });
});

export default seedRouter;
