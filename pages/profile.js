import React from 'react'
import Image from 'next/image'
import Card from '../components/Card'
import { useState, useEffect } from 'react'

const profile = ({ user, data }) => {
  console.log(data)
  const [isLoading, setIsLoading] = useState(user === null)

  useEffect(() => {
    setIsLoading(user === null)
  }, [user])

  return (
  //whole layout
    <div>
      {/* wrapper for the image and text */}
      <div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg hover:bg-green-100">
          {/* TODO fix the white space on full screen on the left */}

          {!isLoading && (
            <Image
              src={user.picture}
              width="3%"
              height="3%"
              layout="responsive"
              alt="main-image"
            />
          )}
        </div>
        <div className="flex justify-center bg-gray-300 opacity-70 rounded-4xl w-20 h-20"></div>
        {/* card */}
        <div className="sm:text-2xl text-black-300 py-10">
          <h1 className="bg-gray-300 opacity-70"> {!isLoading && user.name}</h1>
        </div>

        <div className="flex justify-center sm:text-2xl text-black-300 py-5">
          <p>My Uploads</p>
        </div>
      </div>
      {/* card holder that aligns the cards to center */}
      <div className="flex items-center justify-center">
        {/* media query which shows different amount of cards on different screen sizes */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {!isLoading && data
          .filter((myCard) => myCard.creator === user.sub)
          .map((data, index) => (
            <div key={index} className="m-2">
              <Card
                user={user}
                imageUrl={data.imageUrl}
                title={data.title}
                materials={data.materials}
                likes={data.likes}
                date={data.createdAt}
                id={data._id}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const data = await fetch(
    `https://backend-soc.herokuapp.com/tutorials`,
  ).then((r) => r.json())

  return {
    props: {
      data,
    },
  }
}

export default profile
