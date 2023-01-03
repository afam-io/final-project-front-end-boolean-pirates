import Card from '../components/Card';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default function Tutorials({ data, user }) {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    let likedData = data.filter((alldata) => alldata.likes.includes(user?.sub));
    setFilteredData(likedData);
  }, [data, user?.sub]);

  return (
    //whole layout
    <div className='h-full min-h-screen mt-10'>
      <div className='flex justify-center font-sans text-lg font-semibold text-green-backgroundtext sm:text-2xl text-black-300'>
        Favourites
      </div>
      <div className='flex justify-center pt-2 font-sans text-base font-normal text-green-backgroundtext'>
        This is where your liked posts will appear
      </div>
      {/* wrapper for the image and text */}
      <div className='relative pt-5 justify-self-center'>
        {/* card */}
        <div className='w-screen'>
          {/* card holder that aligns the cards to center */}
          <div className='flex items-center justify-center'>
            {/* media query which shows different amount of cards on different screen sizes */}
            <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
              {filteredData.map((data, index) => (
                <div key={index} className='m-2' onClick={() => {}}>
                  <Card
                    user={user}
                    imageUrl={data.imageUrl}
                    title={data.title}
                    materials={data.materials}
                    likes={data.likes}
                    date={data.createdAt}
                    id={data._id}
                    creatorImageUrl={data.favourites[0]}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export const getServerSideProps = withPageAuthRequired({
  getServerSideProps: async () => {
    const data = await fetch(`${process.env.NEXT_PUBLIC_URL}/tutorials`).then(
      (r) => r.json()
    );

    return {
      props: { data },
    };
  },
});
