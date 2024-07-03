import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Submission from '../models/submissionModel.js';
import { isAdmin, isAuth } from '../utils_backend.js';
import Content from '../models/contentModel.js';

const submissionRouter = express.Router();

function loweCaseSlug(slug) {
  return slug.toLowerCase();
}

submissionRouter.post(
  '/create',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const letter = req.body.name[0].toUpperCase();
    const newSubmission = new Submission({
      name: req.body.name || 'sample content ' + Date.now(),
      slug:
        loweCaseSlug(req.body.name) + '-' + Date.now() ||
        'sample-slug-' + Date.now(),
      image: `/images/letters_placeholder/default_${letter}.png`,
      category: req.body.category || [],
      techStack: req.body.techStack || [],
      type: req.body.type || [],
      cost: req.body.cost || 'Free',
      hasCert: req.body.hasCert || false,
      description: req.body.description || 'sample description',
      rating: req.body.rating || 0,
      url: req.body.url,
    });
    const submission = await newSubmission.save();
    res.send({ message: 'Submission created', submission });
  })
);

const PAGE_SIZE_SUBMISSION = 10;

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
    const letter = req.body.name[0].toUpperCase();
    const newContent = new Content({
      name: req.body.name,
      slug: req.body.slug,
      image:
        req.body.image || `/images/letters_placeholder/default_${letter}.png`,
      category: req.body.category,
      techStack: req.body.techStack,
      type: req.body.type,
      cost: req.body.cost || 'Free',
      hasCert: req.body.hasCert || false,
      description: req.body.description || 'sample description',
      rating: req.body.rating,
      url: req.body.url || 'not found',
    });
    const content = await newContent.save();
    res.send({ message: 'Submission is added into the content list', content });
  })
);

export default submissionRouter;
