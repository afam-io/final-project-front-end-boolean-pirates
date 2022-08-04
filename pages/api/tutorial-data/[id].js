// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import tutorialData from '../../../library/specificTutorialData.js';

export default function handler(req, res) {
  let tutorialId = Number(req.query.id);
  let arr = [1, 2, 3];
  if (tutorialId !== undefined && arr.includes(tutorialId)) {
    let selectedTutorial = getTutorialById(tutorialId);
    res.status(200).json(selectedTutorial);
  } else {
    res.status(200).json(tutorialData);
  }
}

export function getTutorialById(id) {
  const found = tutorialData.find(function (tutorial) {
    return tutorial.id === id;
  });
  return found;
}
