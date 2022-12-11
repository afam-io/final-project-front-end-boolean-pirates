import { FaRegThumbsUp, FaThumbsUp } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import Image from 'next/image';

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
  const initialLikeState = user && likes.includes(user.sub);
  const [liked, setLiked] = useState(initialLikeState);
  const [likeCount, setLikeCount] = useState(likes.length);
  const [comment, setComment] = useState(false);

  async function handleClick() {
    const data = await fetch(`${process.env.NEXT_PUBLIC_URL}/like/${cardId}/`, {
      method: 'PATCH',
      body: JSON.stringify({ userId: user.sub }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const response = await data.json();
    setLiked(response.likes.includes(user.sub));
    setLikeCount(response.likes.length);
  }

  //Functions for comment section on specifictutorial.
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [commentInput, setCommentInput] = useState('');

  function handleChange(e) {
    e.preventDefault();
    setCommentInput(e.target.value);
  }

  async function handleSubmitComment(e) {
    e.preventDefault();
    let username = null;
    if (user.given_name === undefined) {
      username = user.nickname;
    } else {
      username = user.given_name;
    }
    const date = new Date();
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/comments/${cardId}`,
      {
        method: 'PATCH',
        body: JSON.stringify({
          addComments:
            commentInput +
            ' - ' +
            'posted by ' +
            username +
            ' at ' +
            date.toLocaleString() +
            // delimiter
            'commentor_image_url:' +
            user.picture,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const response = await data.json();
    setCommentInput('');
    setComment([
      ...comment,
      commentInput +
        ' - ' +
        'posted by ' +
        username +
        ' at ' +
        date.toLocaleString(),
    ]);
  }

  const embeddedVideoUrl = videoUrl.replace('watch?v=', 'embed/');
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='flex justify-center w-full pt-5 rounded-t-lg text-green-backgroundtext'>
        <iframe
          src={embeddedVideoUrl}
          title='YouTube video player'
          width='574'
          height='315'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen></iframe>
      </div>

      {/*Tutorial Card*/}
      <div className='max-w-2xl p-2 mt-2 bg-white border border-gray-200 rounded-lg shadow-md md:w-144'>
        <div className='flex justify-between'>
          <h1 className='font-sans text-xl font-semibold text-green-backgroundtext'>
            {title}
          </h1>
        </div>

        <div className='flex pt-3 display '>
          <div>
            <Image
              className='inline object-cover w-3 h-3 rounded-full'
              src={creatorImageUrl}
              alt={creator}
              height='35%'
              width='35%'
            />
          </div>
          <div className='pt-2 pl-2'>{creator}</div>
        </div>

        <div className='flex justify-between'>
          <h1 className='pt-4 font-sans text-xl font-semibold text-green-backgroundtext'>
            Level: {ability}
          </h1>

          <h1 className='pt-4 font-sans text-xl font-semibold text-green-backgroundtext'>
            {likeCount} Likes
          </h1>
        </div>

        <div className='flex justify-between'>
          <h1 className='pt-4 font-sans text-xl font-semibold text-green-backgroundtext'>
            Materials:
          </h1>

          <div className='flex pt-1 pr-3 text-2xl display'>
            {user === undefined ? (
              <p className='pt-1 pr-1 text-2xl'>
                {liked ? <FaThumbsUp /> : <FaRegThumbsUp />}
              </p>
            ) : (
              <p onClick={handleClick} className='pt-1 pr-1 text-2xl'>
                {liked ? <FaThumbsUp /> : <FaRegThumbsUp />}
              </p>
            )}
          </div>
        </div>

        <div className='px-2 pt-2 pb-2'>
          {materials.map((material, index) => (
            <span
              className='inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full hover:bg-gray-400'
              key={index}>
              {material}
            </span>
          ))}
        </div>

        <div className='mt-2'>
          <h5 className='pt-4 mb-2 text-2xl font-bold tracking-tight text-green-backgroundtext'>
            Instructions:
          </h5>
          <p className='mb-3 font-normal text-gray-700'>{instructions}</p>
        </div>
      </div>
      {user && (
        <div className='max-w-2xl p-2 mt-2 bg-white border border-gray-200 rounded-lg shadow-md md:w-144'>
          <form className='w-full max-w-xl'>
            <div className='flex flex-wrap mb-6 -mx-3'>
              <h2 className='px-4 pt-3 pb-2 text-green-backgroundtext'>
                Add a new comment
              </h2>
              <div className='w-full px-3 mt-2 mb-2 md:w-full'>
                <textarea
                  className='w-full h-20 px-3 py-2 font-medium leading-normal bg-gray-100 border border-gray-400 rounded resize-none text-green-backgroundtext focus:outline-none focus:bg-white'
                  name='body'
                  placeholder='Type Your Comment'
                  onChange={handleChange}
                  value={commentInput}
                  required></textarea>
              </div>
              <div className='flex items-start w-full px-3 md:w-full'>
                <div className='flex items-start w-1/2 px-2 mr-auto text-gray-700'>
                  <svg
                    fill='none'
                    className='w-5 h-5 mr-1 text-gray-600'
                    viewBox='0 0 24 24'
                    stroke='currentColor'></svg>
                </div>
                <div className='-mr-1'>
                  <input
                    type='submit'
                    className='px-4 py-1 mr-1 font-medium tracking-wide border border-gray-400 rounded-lg bg-green-backgroundtext text-white-text hover:bg-green-700'
                    value='Post Comment'
                    onClick={handleSubmitComment}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
      {/* Comment card */}
      <div className='w-full max-w-2xl p-2 mt-2 bg-white border border-gray-200 rounded-lg shadow-md md:w-144'>
        <h2 className='px-4 pt-3 pb-2 font-bold text-green-backgroundtext'>
          Comments
        </h2>
        <div className='px-4 pt-4 pb-2'>
          {comment ? (
            <div className='max-w-2xl p-2 mt-2 bg-white border border-gray-200 rounded-lg shadow-md '>
              <Image
                className='inline object-cover w-3 h-3 rounded-full'
                src={user.picture}
                alt={creatorImageUrl}
                height='35%'
                width='35%'
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
                className='max-w-2xl p-2 mt-2 bg-white border border-gray-200 rounded-lg shadow-md'
                key={index}>
                <Image
                  className='inline object-cover w-3 h-3 rounded-full'
                  src={singleComment.split('commentor_image_url:')[1]}
                  alt={creatorImageUrl}
                  height='35%'
                  width='35%'
                />{' '}
                {singleComment.split('commentor_image_url:')[0]}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
