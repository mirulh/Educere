import express from 'express';
import { isAdmin, isAuth } from '../utils_backend.js';
import expressAsyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import Content from '../models/contentModel.js';

const dashboardRouter = express.Router();

dashboardRouter.get(
  '/summary',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const users = await User.aggregate([
      {
        $match: { isAdmin: false },
      },
      {
        $group: {
          _id: null,
          numUsers: { $sum: 1 },
        },
      },
    ]);

    const admins = await User.aggregate([
      {
        $match: { isAdmin: true },
      },
      {
        $group: {
          _id: null,
          numAdmins: { $sum: 1 },
        },
      },
    ]);

    const contents = await Content.aggregate([
      {
        $group: {
          _id: null,
          numContents: { $sum: 1 },
        },
      },
    ]);

    const contentCategories = await Content.aggregate([
      { $unwind: '$category' },
      {
        $group: {
          _id: '$category.label',
          count: { $sum: 1 },
        },
      },
      { $project: { _id: 1, count: 1 } },
    ]);

    const contentTechStacks = await Content.aggregate([
      { $unwind: '$techStack' },
      {
        $group: {
          _id: '$techStack.label',
          count: { $sum: 1 },
        },
      },
      { $project: { _id: 1, count: 1 } },
    ]);

    const contentTypes = await Content.aggregate([
      { $unwind: '$type' },
      {
        $group: {
          _id: '$type.label',
          count: { $sum: 1 },
        },
      },
      { $project: { _id: 1, count: 1 } },
    ]);

    res.send({
      users,
      admins,
      contents,
      contentCategories,
      contentTechStacks,
      contentTypes,
      numCategory: contentCategories.length,
      numTechStack: contentTechStacks.length,
      numType: contentTypes.length,
    });
  })
);

export default dashboardRouter;
