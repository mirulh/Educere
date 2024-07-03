import express from 'express';
import Content from '../models/contentModel.js';
import data4 from '../Data_Mock.js';

const seedRouter2 = express.Router();

seedRouter2.get('/', async (req, res) => {
  await Content.deleteMany({});
  const seededContents = await Content.insertMany(data4.contents);
  res.send({ seededContents });
});

export default seedRouter2;
