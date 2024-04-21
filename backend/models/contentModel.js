import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  comment: { type: String, required: true },
  rating: { type: Number, required: true },
});

const contentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    categories: { type: String, required: true },
    cost: { type: String, required: true },
    hasCert: { type: Boolean, default: false },
    types: { type: [String], required: true },
    description: { type: String, required: true },
    url: { type: String, required: true },
    rating: { type: Number, required: true, default: 0 },
    numReviews: { type: Number, required: true, default: 0 },
    reviews: [reviewSchema],
  },
  {
    timestamps: true,
  }
);

const Content = mongoose.model('Content', contentSchema);
export default Content;
