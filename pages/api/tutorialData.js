// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import tutorialData from "../../libs/specificTutorialData"

export default function handler(req, res) {
<<<<<<< HEAD:pages/api/tutorialData.js
  res.status(200).json(tutorialData)
=======
  res.status(200).json({ name: 'Tutorials 1' })
>>>>>>> main:pages/api/hello.js
}
