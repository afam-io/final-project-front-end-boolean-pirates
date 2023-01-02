import { useRouter } from 'next/router';

function SpecificTutorial() {
  const router = useRouter();
  const { SpecificTutorial } = router.query;

  return (
    <>
      <h1>Title: {SpecificTutorial} </h1>
    </>
  );
}

export default SpecificTutorial;
