import mongoose from 'mongoose'
import tutorialsSchema from '../../../../models/postTutorial.js'
import dbConnect from '../../../../utils/connectMongo.js'

export default async function handler(req, res) {

  await dbConnect();

    const { id } = req.query
    const { userId } = req.body
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send(`No tutorial with id ${id} found`)
    }
    try {
      let post = await tutorialsSchema.findById(id)
      let likes = post.likes
      if (!likes.includes(userId)) {
        likes.push(userId)
        await tutorialsSchema.findByIdAndUpdate(id, post)
      } else {
        let index = likes.indexOf(userId)
        likes.splice(index, 1)
        await tutorialsSchema.findByIdAndUpdate(id, post)
      }
  
      res.status(200).json({ message: 'Post is succesfully updated', likes })
    } catch (error) {
      res.status(404).json({ message: error.message })
    }
  }