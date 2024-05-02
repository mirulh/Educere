import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Submission from '../models/submissionModel.js';
import { isAdmin, isAuth } from '../utils_backend.js';
import Content from '../models/contentModel.js';

const submissionRouter = express.Router();

function createSlug(str) {
  return str.replace(/\s+/g, '-').toLowerCase();
}

submissionRouter.post(
  '/create',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const newSubmission = new Submission({
      name: req.body.name || 'sample content ' + Date.now(),
      slug: req.body.name
        ? createSlug(req.body.name) + '-' + Date.now()
        : 'sample-slug-' + Date.now(),
      image: '/images/default.png',
      category: 'sample category',
      cost: req.body.cost || 'Free',
      hasCert: req.body.hasCert || false,
      type: ['sample type'],
      description: req.body.description || 'sample description',
      url: req.body.url,
    });
    const submission = await newSubmission.save();
    res.send({ message: 'Submission created', submission });
  })
);

const PAGE_SIZE_SUBMISSION = 5;

submissionRouter.get(
  '/admin',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const { query } = req;
    const page = query.page || 1;
    const pageSize = PAGE_SIZE_SUBMISSION;
    const count = (page - 1) * pageSize;

    const submissions = await Submission.find()
      .skip(pageSize * (page - 1))
      .limit(pageSize);

    const countSubmissions = await Submission.countDocuments();

    res.send({
      submissions,
      countSubmissions,
      page,
      pages: Math.ceil(countSubmissions / pageSize),
      count,
    });
  })
);

submissionRouter.delete(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const submission = await Submission.findById(req.params.id);
    if (submission) {
      await submission.deleteOne();
      res
        .status(200)
        .send({ message: `deleted submission id ${submission._id}` });
    } else {
      res.status(404).send({ message: 'submission not found' });
    }
  })
);

submissionRouter.get(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const submission = await Submission.findById(req.params.id);

    if (submission) {
      //   res.send({ message: 'Submission found' });
      res.send(submission);
    } else {
      res.status(404).send({ message: 'Submission Not Found' });
    }
  })
);

submissionRouter.post(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const newContent = new Content({
      name: req.body.name,
      slug: req.body.slug,
      image: req.body.image || '/images/default.png',
      category: 'sample category',
      cost: req.body.cost || 'Free',
      hasCert: req.body.hasCert || false,
      type: ['sample type'],
      description: req.body.description || 'sample description',
      url: req.body.url || 'not found',
    });
    const content = await newContent.save();
    res.send({ message: 'Submission is added into the content list', content });
  })
);

export default submissionRouter;
