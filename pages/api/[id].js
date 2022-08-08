// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import tutorialData from '../../library/specificTutorialData';

export default function handler(req, res) {
    console.log(req.query.id)
  if (req.query.id !== undefined) {
    let tutorialId = Number(req.query.id);
    let selectedTutorial = getTutorialById(tutorialId)
    res.status(200).json(selectedTutorial);
  }else{
    console,log(req.query)
  res.status(200).json(tutorialData);
}}

export function getTutorialById(id) {
  const found = tutorialData.find(function (tutorial) {
    return tutorial.id === id;
  });
  return found;
}

