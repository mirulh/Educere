import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  comment: { type: String, required: true },
  rating: { type: Number, required: true },
});

const submissionSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    category: [{ label: String, value: String }],
    techStack: [{ label: String, value: String }],
    type: [{ label: String, value: String }],
    cost: { type: String, required: true },
    hasCert: { type: Boolean, default: false },
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

const Submission = mongoose.model('Submission', submissionSchema);
export default Submission;
