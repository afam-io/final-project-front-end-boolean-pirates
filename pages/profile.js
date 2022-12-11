import React from 'react';
import Image from 'next/image';
import Card from '../components/Card';
import { useState } from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useUser } from '@auth0/nextjs-auth0';

const Profile = ({ firstData }) => {
  const [data, setData] = useState(firstData);
  const { user, error, isLoading } = useUser();

  async function handleDelete(myCardId) {
    //delete user post

    const data = await fetch(`${process.env.NEXT_PUBLIC_URL}/${myCardId}`, {
      method: 'DELETE',

      headers: {
        'Content-Type': 'application/json',
      },
    });
    const response = await data.json();
    setData(
      await fetch(`${process.env.NEXT_PUBLIC_URL}/tutorials`).then((r) =>
        r.json()
      )
    );
  }

  return (
    <div className='h-full min-h-screen mt-5'>
      <div>
        <div className='shadow-lg'>
          <div className='flex justify-center py-10 bg-gradient-to-r from-sky-200 via-teal-200 to-sky-200'>
            <div>
              <Image
                className='inline object-cover w-8 h-8 rounded-full'
                src={user?.picture}
                alt={user?.sub}
                height='100%'
                width='100%'
              />
            </div>
          </div>
          <div>
            <p className='pt-5 pb-4 text-center sm:text-2xl text-black-300'>
              {user?.name}
            </p>
            <p className='pb-5 text-center sm:text-1xl text-black-300'>
              {' '}
              Last logged in : {user?.updated_at}
            </p>
          </div>
        </div>

        {/* card */}
        <div className='flex justify-center py-12 font-sans text-lg font-semibold sm:text-1xl text-green-backgroundtext'>
          <p>My Uploads</p>
        </div>
      </div>
      {/* card holder that aligns the cards to center */}
      <div className='flex items-center justify-center'>
        {/* media query which shows different amount of cards on different screen sizes */}
        <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
          {data
            .filter((myCard) => myCard.creator === user?.name)
            .map((data, index) => (
              <div key={index} className='m-2'>
                <Card
                  user={user}
                  imageUrl={data.imageUrl}
                  title={data.title}
                  materials={data.materials}
                  likes={data.likes}
                  date={data.createdAt}
                  id={data._id}
                  creator={data.creator}
                  creatorImageUrl={data.creator_image_url[0]}
                />
                <div className='px-4 mt-2 text-center text-white bg-red-500 rounded hover:bg-red-700'>
                  <button
                    onClick={() => {
                      handleDelete(data._id);
                    }}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = withPageAuthRequired({
  getServerSideProps: async () => {
    const firstData = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/tutorials`
    ).then((r) => r.json());

    return {
      props: {
        firstData,
      },
    };
  },
});

export default Profile;
