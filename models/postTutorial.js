import mongoose from 'mongoose';

const tutorialSchema = new mongoose.Schema({
  title: String,
  instructions: String,
  ability: String,
  creator: String,
  materials: {
    type: [String],
    default: [],
  },
  videoUrl: String,
  imageUrl: String,
  likes: {
    type: [String],
    default: [],
  },
  comments: {
    type: [String],
    default: [],
  },
  creator_image_url: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export default mongoose.models.Tutorial ||
  mongoose.model('Tutorial', tutorialSchema);
