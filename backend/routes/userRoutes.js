import express from 'express';
import User from '../models/userModel.js';
import { generateToken, isAuth } from '../utils_backend.js';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';

const userRouter = express.Router();

userRouter.get(
  '/',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    // res.send({ message: 'read' });
    const users = await User.find({});
    res.send(users);
  })
);

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

userRouter.put(
  '/profile',
  isAuth, //authenticate user by Id
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

export default userRouter;
