import SpecificTutorialCard from '../components/SpecificTutorialCard'
export default function SpecificTutorial({ data, cardId }) {
  // console.log(context);
  console.log(data)
  console.log(cardId)
  return (
    <div>
      {data
        .filter((card) => card._id === cardId)
        .map((card, index) => (
          <div key={index} className="m-2">
            <SpecificTutorialCard
              cardId={card._id}
              title={card.title}
              likes={card.likes}
              videoUrl={card.imageUrl}
              ability={card.ability}
              materials={card.materials}
              instructions={card.instructions}
            />
          </div>
        ))}
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const data = await fetch(
    `https://backend-soc.herokuapp.com/tutorials`,
  ).then((r) => r.json())
  const { cardId } = context.query

  return {
    props: {
      data,
      cardId,
    },
  }
}
