// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import tutorialData from '../../library/specificTutorialData';

export default function handler(req, res) {
  if (req.query.params) {
    tutorialId = req.query.params;
  }
  res.status(200).json(tutorialData);
}

export function getTutorialById(id) {
  const found = tutorialData.find(function (book) {
    return book.id === id;
  });
  return found;
}
