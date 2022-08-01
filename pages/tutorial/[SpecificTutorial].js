import { useRouter } from 'next/router';
import SpecificTutorialCard from '../../components/SpecificTutorialCard';
import specificTutorialData from '../../libs/specificTutorialData';

function SpecificTutorial() {
  const router = useRouter();
  const { SpecificTutorial } = router.query;

  return (
    <>
      <h1>Title: {SpecificTutorial} </h1>{' '}
      {/* To show clearly that the dynamic routing is working*/}
      <SpecificTutorialCard tutorialData={specificTutorialData[0]} />
    </>
  );
}

export default SpecificTutorial;
