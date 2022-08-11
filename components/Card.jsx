import Image from 'next/image'
import { FaRegThumbsUp, FaThumbsUp } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import moment from 'moment'
import Link from 'next/link'

const Card = ({
  imageUrl,
  title,
  description,
  materials,
  likes,
  date,
  id,
  user,
  creator
}) => {
  // mock data used to test layout
  const initialLikeState = user && likes.includes(user.sub)
  const [liked, setLiked] = useState(initialLikeState)
  const [likeCount, setLikeCount] = useState(likes.length)

  useEffect(() => {
    setLiked(user && likes.includes(user.sub))
  }, [user, likes])

  async function handleClick() {
    const data = await fetch(
      `https://backend-soc.herokuapp.com/tutorials/${id}/likeTutorial`,
      {
        method: 'PATCH',
        body: JSON.stringify({ userId: user.sub }),
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    const response = await data.json()
    setLiked(response.likes.includes(user.sub))
    setLikeCount(response.likes.length)
  }

  return (
    <div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg hover:bg-green-100 hover:cursor-pointer">
        <Link href={{ pathname: '/specifictutorial', query: { cardId: id } }}>
          <div>
            <Image
              className="w-full"
              src={imageUrl}
              alt={title}
              height="450px"
              width="600px"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{title}</div>
              <p className="text-gray-700 text-base">{description}</p>
            </div>
            <div className="px-4 pt-4 pb-2">
              {materials.map((material, index) => (
                <span
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  key={index}
                >
                  {material}
                </span>
              ))}
            </div>
          </div>
        </Link>

        <div className="flex display justify-between px-4 pt-1">
          <p className="text-gray-700 text-base mt-2">
            {moment(date).fromNow()}
          </p>
          <div className="flex display">
            {user === null ? (
              <p className="pt-1 pr-1 text-2xl">
                {liked ? <FaThumbsUp /> : <FaRegThumbsUp />}
              </p>
            ) : (
              <p onClick={handleClick} className="pt-1 pr-1 text-2xl">
                {liked ? <FaThumbsUp /> : <FaRegThumbsUp />}
              </p>
            )}
            <p className="text-gray-700 text-base pb-2 pt-2"> {likeCount} </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
