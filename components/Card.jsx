import Image from 'next/image';
import { FaRegThumbsUp, FaThumbsUp } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import moment from 'moment';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';

const Card = ({
  imageUrl,
  title,
  description,
  materials,
  likes,
  date,
  id,
  user,
  creatorImageUrl,
}) => {
  const initialLikeState = user && likes.includes(user.sub);
  const [liked, setLiked] = useState(initialLikeState);
  const [likeCount, setLikeCount] = useState(likes.length);

  useEffect(() => {
    setLiked(user && likes.includes(user.sub));
  }, [user, likes]);

  async function handleClick() {
    const data = await fetch(`${process.env.NEXT_PUBLIC_URL}/like/${id}`, {
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

  return (
    <div>
      <div className='max-w-sm overflow-hidden rounded shadow-lg hover:shadow-gray-400 hover:cursor-pointer'>
        <Link href={{ pathname: '/specifictutorial', query: { cardId: id } }}>
          <div>
            <Image
              className='w-full'
              src={imageUrl}
              alt={title}
              height='450px'
              width='600px'
            />
            <div className='px-6 py-4'>
              <div className='mb-2 text-xl font-bold'>{title}</div>
              <p className='text-base text-gray-700'>{description}</p>
            </div>
            <div className='px-4 pt-4 pb-2'>
              {materials.map((material, index) => (
                <span
                  className='inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full'
                  key={index}>
                  {material}
                </span>
              ))}
            </div>
          </div>
        </Link>

        <div className='flex justify-between px-4 pt-2 pb-2 display'>
          <div>
            <div className='flex display'>
              <Image
                className='inline object-cover w-3 h-3 rounded-full'
                src={creatorImageUrl}
                alt={creatorImageUrl}
                height='35%'
                width='35%'
              />
              <div className='mt-2 ml-2 text-gray-700'>
                {moment(date).fromNow()}
              </div>
            </div>
          </div>

          <div className='flex display'>
            {user === undefined ? (
              <p className='pt-1 pr-1 text-2xl'>
                {liked ? <FaThumbsUp /> : <FaRegThumbsUp />}
              </p>
            ) : (
              <p onClick={handleClick} className='pt-1 pr-1 text-2xl'>
                {liked ? <FaThumbsUp /> : <FaRegThumbsUp />}
              </p>
            )}
            <p className='pt-2 pb-2 text-base text-gray-700'> {likeCount} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
