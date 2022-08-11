import { useRouter } from "next/router";
import SpecificTutorialCard from "../../components/SpecificTutorialCard";

function SpecificTutorial({ data }) {
  // const router = useRouter();
  // const { SpecificTutorial } = router.query;
  return (
    <>
      {/* <h1>Title: {SpecificTutorial} </h1>{' '} */}
      {/* To show clearly that the dynamic routing is working*/}
      <SpecificTutorialCard tutorialData={data} />
    </>
  );
}

export const getServerSideProps = async ({ params }) => {
  const tutorialId = params.tutorialId.replace(/\-/g, "+");
  const data = await fetch(
    `https://backend-soc.herokuapp.com/tutorials/${tutorialId}`
  ).then((r) => r.json());

  return {
    props: {
      data,
    },
  };
};

export default SpecificTutorial;
