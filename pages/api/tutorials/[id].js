import mongoose from 'mongoose';
import tutorialsSchema from '../../../models/Tutorial.js';
import dbConnect from '../../../libs/dbConnect.js';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      const { id } = req.query;
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`No tutorial with id ${id} found`);
      }
      try {
        const tutorial = await tutorialsSchema.findById(id);
        res.status(200).json(tutorial);
      } catch (error) {
        res.status(404).json({ message: error.message });
      }
      break;
    case 'DELETE':
      try {
        const { id } = req.query;
        if (!mongoose.Types.ObjectId.isValid(id)) {
          return res.status(404).send(`No tutorial with id ${id} found`);
        }
        await tutorialsSchema.findByIdAndRemove(id);
        res.status(200).json({ message: `Post with ${id} deleted` });
      } catch (error) {
        res.status(404).json({ message: error.message });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
