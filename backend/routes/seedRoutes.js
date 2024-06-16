import express from 'express';
import data from '../Data_Users.js';
import data2 from '../Data_Contents.js';
import data3 from '../Data_Submissions.js';
import User from '../models/userModel.js';
import Content from '../models/contentModel.js';
import Submission from '../models/submissionModel.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  await User.deleteMany({});
  const seededUsers = await User.insertMany(data.users);
  await Content.deleteMany({});
  const seededContents = await Content.insertMany(data2.contents);
  await Submission.deleteMany({});
  const seededSubmissions = await Submission.insertMany(data3.submissions);
  res.send({ seededUsers, seededContents, seededSubmissions });
});

export default seedRouter;
