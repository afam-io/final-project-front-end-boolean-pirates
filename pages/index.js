import Card from '../components/Card';
import Image from 'next/image';

export default function Home( { data, user } ) {

  
  return (
    //whole layout
    <div>
      {/* wrapper for the image and text */}
      <div className='relative justify-self-center w-screen md:min-w-fit'>
        {/* TODO fix the white space on full screen on the left */}
        <Image
          src='/images/full-screen-hero-image.jpg'
          width="100%"
          height="40.6%"
          layout="responsive"
          alt='main-image'

        />
        {/* card */}
        <div className='bottom-8 left-0 right-0 px-4 py-2 p-4 bg-gray-300 opacity-70'>
          <h1 className='sm:text-3xl text-black-300'>
            From wind turbines to window farms, find your next project with
            Redeem.
          </h1>
        </div>
      </div>
      {/* card holder that aligns the cards to center */}
      <div className='flex items-center justify-center'>
        {/* media query which shows different amount of cards on different screen sizes */}
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          { data.map((data, index) => (
            <div key={index} className='m-2'>
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
  );
}


export const getServerSideProps = async () => {
  const data = await fetch(
    `https://backend-soc.herokuapp.com/tutorials`
  ).then((r) => r.json());

  return {
    props: {
      data,
    },
  };
};

