// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import tutorialData from "../../libs/specificTutorialData"

export default function handler(req, res) {
  res.status(200).json(tutorialData)
}
