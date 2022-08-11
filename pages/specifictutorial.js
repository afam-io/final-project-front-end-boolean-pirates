import SpecificTutorialCard from '../components/SpecificTutorialCard'

export default function SpecificTutorial({ data, cardId, user }) {
  console.log(user)
  return (
    <div>
      {data
        .filter((card) => card._id === cardId)
        .map((card, index) => (
          <div key={index} className="m-2">
            <SpecificTutorialCard
              user = {user}
              cardId={card._id}
              title={card.title}
              likes={card.likes}
              videoUrl={card.videoUrl}
              ability={card.ability}
              materials={card.materials}
              instructions={card.instructions}
              comments={card.comments}
              creator={card.creator}
              
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
