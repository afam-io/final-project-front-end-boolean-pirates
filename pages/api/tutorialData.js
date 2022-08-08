// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import tutorialData from '../../library/specificTutorialData';

export default function handler(req, res) {
  if (req.query.params) {
    let tutorialId = Number(req.query.params);
    console.log(tutorialData)
    let selectedTutorial = getTutorialById(tutorialId)
    res.status(200).json(selectedTutorial);
  }
  res.status(200).json(tutorialData);
}

export function getTutorialById(id) {
  const found = tutorialData.find(function (tutorial) {
    return tutorial.id === id;
  });
  return found;
}

