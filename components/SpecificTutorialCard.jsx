import { FaRegThumbsUp, FaThumbsUp } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function SpecificTutorialCard({
  cardId,
  title,
  likes,
  videoUrl,
  ability,
  materials,
  instructions,
  user,
  comments,
  creator,
  creatorImageUrl,
}) {
  //Fuctions for Like thumb on the card
  const initialLikeState = user && likes.includes(user.sub)
  const [liked, setLiked] = useState(initialLikeState)
  const [likeCount, setLikeCount] = useState(likes.length)
  const [comment, setComment] = useState(false)

  useEffect(() => {
    setLiked(user && likes.includes(user.sub))
  }, [user, likes])

  async function handleClick() {
    const data = await fetch(
      `https://backend-soc.herokuapp.com/tutorials/${cardId}/likeTutorial`,
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

  //Functions for comment section on specifictutorial.
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [commentInput, setCommentInput] = useState('')

  function handleChange(e) {
    e.preventDefault()
    setCommentInput(e.target.value)
  }

  async function handleSubmitComment(e) {
    e.preventDefault()
    const date = new Date()
    const data = await fetch(
      `https://backend-soc.herokuapp.com/tutorials/${cardId}/commentPost`,
      {
        method: 'PATCH',
        body: JSON.stringify({
          addComments:
            commentInput +
            ' - ' +
            'posted by ' +
            user.given_name +
            ' at ' +
            date.toLocaleString() +
            // delimiter
            '#£)*$%^!!%' +
            user.picture,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    const response = await data.json()
    setCommentInput('')
    setComment(
      commentInput +
        ' - ' +
        'posted by ' +
        user.given_name +
        ' at ' +
        date.toLocaleString(),
    )
  }

  const embeddedVideoUrl = videoUrl.replace('watch?v=', 'embed/')
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="rounded-t-lg text-green-backgroundtext flex justify-center pt-5 w-full">
        <iframe
          src={embeddedVideoUrl}
          title="YouTube video player"
          width="574"
          height="315"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/*Tutorial Card*/}
      <div className=" p-2 mt-2 max-w-2xl  bg-white rounded-lg border border-gray-200 shadow-md md:w-144">
        <div className="flex justify-between">
          <h1 className="text-xl  text-green-backgroundtext font-semibold font-sans">
            {title}
          </h1>
        </div>

        <div className="pt-3 flex display ">
          <div>
            <Image
              className="inline object-cover w-3 h-3 rounded-full"
              src={creatorImageUrl}
              alt={creator}
              height="35%"
              width="35%"
            />
          </div>
          <div className="pt-2 pl-2">{creator}</div>
        </div>

        <div className="flex justify-between">
          <h1 className="text-xl text-green-backgroundtext font-semibold font-sans pt-4">
            Level: {ability}
          </h1>

          <h1 className="text-xl  text-green-backgroundtext font-semibold font-sans pt-4">
            {likeCount} Likes
          </h1>
        </div>

        <div className="flex justify-between">
          <h1 className="text-xl text-green-backgroundtext font-semibold font-sans pt-4">
            Materials:
          </h1>

          <div className="flex display pt-1 pr-3 text-2xl">
            {user === undefined ? (
              <p className="pt-1 pr-1 text-2xl">
                {liked ? <FaThumbsUp /> : <FaRegThumbsUp />}
              </p>
            ) : (
              <p onClick={handleClick} className="pt-1 pr-1 text-2xl">
                {liked ? <FaThumbsUp /> : <FaRegThumbsUp />}
              </p>
            )}
          </div>
        </div>

        <div className="px-2 pt-2 pb-2">
          {materials.map((material, index) => (
            <span
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 hover:bg-gray-400 mr-2 mb-2"
              key={index}
            >
              {material}
            </span>
          ))}
        </div>

        <div className="mt-2">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-green-backgroundtext pt-4">
            Instructions:
          </h5>
          <p className="mb-3 font-normal text-gray-700">{instructions}</p>
        </div>
      </div>
      {user && (
        <div className=" p-2 mt-2 max-w-2xl  bg-white rounded-lg border border-gray-200 shadow-md md:w-144">
          <form className="w-full max-w-xl">
            <div className="flex flex-wrap -mx-3 mb-6">
              <h2 className="px-4 pt-3 pb-2 text-green-backgroundtext">
                Add a new comment
              </h2>
              <div className="w-full md:w-full px-3 mb-2 mt-2">
                <textarea
                  className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium text-green-backgroundtext focus:outline-none focus:bg-white"
                  name="body"
                  placeholder="Type Your Comment"
                  onChange={handleChange}
                  value={commentInput}
                  required
                ></textarea>
              </div>
              <div className="w-full flex items-start md:w-full px-3">
                <div className="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
                  <svg
                    fill="none"
                    className="w-5 h-5 text-gray-600 mr-1"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  ></svg>
                </div>
                <div className="-mr-1">
                  <input
                    type="submit"
                    className="bg-green-backgroundtext text-white-text font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1  hover:bg-green-700"
                    value="Post Comment"
                    onClick={handleSubmitComment}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
      {/* Comment card */}
      <div className=" p-2 mt-2 max-w-2xl  bg-white rounded-lg border border-gray-200 shadow-md w-full md:w-144">
        <h2 className="px-4 pt-3 pb-2 text-green-backgroundtext font-bold">
          Comments
        </h2>
        <div className="px-4 pt-4 pb-2">
          {comment ? (
            <div className="  p-2 mt-2 max-w-2xl  bg-white rounded-lg border border-gray-200 shadow-md md:w-144">
              <Image
                className="inline object-cover w-3 h-3 rounded-full"
                src={user.picture}
                alt={creatorImageUrl}
                height="35%"
                width="35%"
              />{' '}
              {comment}
            </div>
          ) : (
            ''
          )}
          {comments
            .slice(0)
            .reverse()
            .map((singleComment, index) => (
              <div
                className="p-2 mt-2 max-w-2xl  bg-white rounded-lg border border-gray-200 shadow-md md:w-144"
                key={index}
              >
                <Image
                  className="inline object-cover w-3 h-3 rounded-full"
                  src={singleComment.split('#£)*$%^!!%')[1]}
                  alt={creatorImageUrl}
                  height="35%"
                  width="35%"
                />{' '}
                {singleComment.split('#£)*$%^!!%')[0]}
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
