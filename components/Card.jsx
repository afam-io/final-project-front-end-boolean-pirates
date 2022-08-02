import Image from 'next/image'
import { FaRegThumbsUp, FaThumbsUp } from 'react-icons/fa'
import { useState } from 'react'

const Card = ({ imageURL, title, description, materials, likes, date }) => {
  // mock data used to test layout
  const [like, setLike] = useState(false)

  function handleClick() {
    setLike(!like)
    console.log(like)
  }

  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <Image
          className="w-full"
          src={imageURL}
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
        <div className="flex display justify-between px-4 pb-2">
          <p className="mt-1 text-gray-700 text-base">{date}</p>
          <div className="flex display">
            <p onClick={handleClick} className="pt-1 pr-1 text-xl">
              {!like ? <FaRegThumbsUp /> : <FaThumbsUp />}{' '}
            </p>
            <p className="text-gray-700 text-base pt-1"> {likes} </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
