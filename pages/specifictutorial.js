import SpecificTutorialCard from '../components/SpecificTutorialCard'
import { useUser } from '@auth0/nextjs-auth0';

export default function SpecificTutorial({ data, cardId }) {
  const { user, error, isLoading } = useUser();
  return (
    <div className="mt-10">
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
              creatorImageUrl={card.creator_image_url[0]}
            />
          </div>
        ))}
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/tutorials`,
  ).then((r) => r.json())
  const { cardId } = context.query

  return {
    props: {
      data,
      cardId,
    },
  }
}
