import express from 'express';
import User from '../models/userModel.js';
import { generateToken, isAdmin, isAuth } from '../utils_backend.js';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import { ObjectId } from 'mongodb';

const userRouter = express.Router();

const PAGE_SIZE_USER = 2;

userRouter.get(
  '/admin',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const { query } = req;
    const page = query.page || 1;
    const pageSize = PAGE_SIZE_USER;
    const count = (page - 1) * pageSize;

    // works the same with only .find()
    const users = await User.find({})
      .skip(pageSize * (page - 1))
      .limit(pageSize);

    const countUsers = await User.countDocuments();

    res.send({
      users,
      countUsers,
      page,
      pages: Math.ceil(countUsers / pageSize),
      count,
    });
  })
);

userRouter.get(
  '/:id',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
      res.send(user);
    } else {
      res.status(404).send({ message: 'User Not Found' });
    }
  })
);

// delete user
userRouter.delete(
  '/:id', // this is req.params.id
  isAuth,
  expressAsyncHandler(async (req, res) => {
    // res.send({ requestedId: req.params.id });
    const user = await User.findById(req.params.id);
    if (user) {
      if (user.email === 'admin@gmail.com') {
        res.status(400).send({ message: 'Can Not Delete Admin User' });
        return;
      }
      await user.deleteOne();
      res.send({ message: 'User Deleted' });
    } else {
      res.status(404).send({ message: 'User Not Found' });
    }
  })
);

// user profile update
userRouter.put(
  '/profile',
  isAuth, // return req.user (including req.user._id)
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
      // res.status(200).send({ message: 'User found' });
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      if (req.body.password) {
        user.password = bcrypt.hashSync(req.body.password, 8);
      }
      const updatedUser = await user.save();
      res.send({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
        token: generateToken(updatedUser),
      });
    } else {
      res.status(404).send({ message: 'User not found' });
    }
  })
);

// all users edit screen
userRouter.put(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
      // res.status(200).send({ message: 'User found' });
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.isAdmin = req.body.isAdmin || user.isAdmin;
      const updatedUser = await user.save();
      res.send({ message: 'User Updated', user: updatedUser });
    } else {
      res.status({ message: 'User Not Found' });
    }
  })
);

userRouter.post(
  '/signin',
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        });
        return;
      }
    }
    res.status(401).send({ message: 'Invalid email or password' });
  })
);

userRouter.get(
  '/saves/:id',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
      res.send({
        numSaves: user.numSaves,
        saves: user.saves,
      });
    } else {
      res.status(404).send({ message: 'User Not Found' });
    }
  })
);

userRouter.post(
  '/signup',
  expressAsyncHandler(async (req, res) => {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password),
    });
    const user = await newUser.save();
    res.send({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user),
    });
  })
);

userRouter.post(
  '/save',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (!user) {
      // res.send({ message: 'user found' });
      return;
    }

    const isSaved = user.saves.find((save) => save._id === req.body.contentId);

    if (isSaved) {
      user.saves.pull(req.body.contentId);
    } else {
      // res.send({ message: 'not saved yet' });
      const newSave = {
        _id: req.body.contentId,
        name: req.body.contentName,
        slug: req.body.contentSlug,
        url: req.body.contentUrl,
      };
      user.saves.push(newSave);
    }

    user.numSaves = user.saves.length;

    await user.save();

    res.status(201).send({
      numSaves: user.numSaves,
      saves: user.saves,
    });
  })
);

export default userRouter;
