import { useRouter } from 'next/router';
import SpecificTutorialCard from '../../components/SpecificTutorialCard';

function SpecificTutorial({ data }) {
  // const router = useRouter();
  // const { SpecificTutorial } = router.query;
  console.log(data);
  return (
    <>
      {/* <h1>Title: {SpecificTutorial} </h1>{' '} */}
      {/* To show clearly that the dynamic routing is working*/}
      <SpecificTutorialCard tutorialData={data} />
    </>
  );
}

export const getServerSideProps = async ({ params }) => {
  const tutorialId = params.tutorialId.replace(/\-/g, '+');
  const data = await fetch(
    `http://localhost:3000/api/tutorial-data/${tutorialId}`
  ).then((r) => r.json());

  return {
    props: {
      data,
    },
  };
};

export default SpecificTutorial;
