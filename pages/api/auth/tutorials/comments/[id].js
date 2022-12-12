import mongoose from 'mongoose'
import tutorialsSchema from '../../../../models/postTutorial.js'
import dbConnect from '../../../../utils/connectMongo.js'

export default async function handler(req, res) {

  await dbConnect();

  const { id } = req.query
  const { addComments } = req.body
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`No tutorial with id ${id} found`)
  }
  try {
    let post = await tutorialsSchema.findById(id)
    let comments = post.comments

    comments.push(addComments)
    await tutorialsSchema.findByIdAndUpdate(id, post)

    res.status(200).json({ message: 'Comment is succesfully added', comments })
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}