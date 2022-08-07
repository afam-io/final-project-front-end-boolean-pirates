import Card from '../components/Card';
import Image from 'next/image';
import moment from "moment";
import { me } from '../pages/api/me'

export default function Home( {data, user} ) {

  console.log(data)
  return (
    //whole layout
    <div>
      {/* wrapper for the image and text */}
      <div className='relative justify-self-center w-screen border'>
        {/* TODO fix the white space on full screen on the left */}
        <Image
          src='/images/hero-image.jpg'
          width="100%"
          height="60%"
          layout="responsive"
          alt='main-image'

        />
        {/* card */}
        <div className='absolute bottom-8 left-0 right-0 px-4 py-2 bg-gray-300 opacity-70'>
          <h1 className='mt-2 sm:text-3xl text-black-300'>
            From wind turbines to window farms, find your next project with
            Redeem.
          </h1>
        </div>
      </div>
      {/* card holder that aligns the cards to center */}
      <div className='flex items-center justify-center'>
        {/* media query which shows different amount of cards on different screen sizes */}
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {data.map((data, index) => (
            <div key={index} className='m-2'>
              <Card
                user={user}
                imageUrl={data.imageUrl}
                title={data.title}
                // description={data.description}
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
  );
}


export const getServerSideProps = async () => {
  const data = await fetch(
    `https://redeem-soc.herokuapp.com/tutorials`
  ).then((r) => r.json());

  return {
    props: {
      data,
    },
  };
};
