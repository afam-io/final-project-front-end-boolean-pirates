import { useRouter } from 'next/router';
import SpecificTutorialCard from '../../components/SpecificTutorialCard';
import specificTutorialData from '../../libs/specificTutorialData';

function SpecificTutorial({ data }) {
  // const router = useRouter();
  // const { SpecificTutorial } = router.query;

  return (
    <>
      {/* <h1>Title: {SpecificTutorial} </h1>{' '} */}
      {/* To show clearly that the dynamic routing is working*/}
      <SpecificTutorialCard tutorialData={data[0]} />
    </>
  );
}

export const getServerSideProps = async ({ params }) => {
  const tutorialId = params.tutorialId.replace(/\-/g, '+');
  const data = await fetch(`http://localhost:3000/api/tutorialData`).then((r) =>
    r.json()
  );
  return {
    props: {
      data,
    },
  };
};

export default SpecificTutorial;
