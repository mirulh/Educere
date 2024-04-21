import express from 'express';
import Content from '../models/contentModel.js';
import expressAsyncHandler from 'express-async-handler';

const contentRouter = express.Router();

contentRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const contents = await Content.find();
    res.send(contents);
  })
);

contentRouter.get(
  '/search',
  expressAsyncHandler(async (req, res) => {
    // const { query } = req;
  })
);

export default contentRouter;
