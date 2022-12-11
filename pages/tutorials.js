import Link from 'next/link';

export default function Tutorials({ data, user }) {
  return (
    //whole layout
    <div className='h-screen mt-5'>
      {/* wrapper for the image and text */}
      <div className='relative justify-self-center'>
        {/* card */}
        <div className='w-screen'>
          {/* ===== Search Bar ======= */}
          <div className='flex justify-center px-4 py-5'>
            {/* form div which wraps tightly around input */}
            <div className='flex justify-center w-screen'></div>
          </div>
          {/* card holder that aligns the cards to center */}
          <div className='flex items-center justify-center'>
            {/* media query which shows different amount of cards on different screen sizes */}
            <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
              {data.map((data, index) => (
                <div key={index} className='m-2' onClick={() => {}}>
                  <Link href={`/specifictutorial${data._id}`}>
                    <div className='hover:cursor-pointer'>
                      {data.title} by {data.creator}
                    </div>
                    {/* <Card
                    user={user}
                    imageUrl={data.imageUrl}
                    title={data.title}
                    materials={data.materials}
                    likes={data.likes}
                    date={data.createdAt}
                    id={data._id}
                  /> */}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_URL}/tutorials`).then(
    (r) => r.json()
  );

  return {
    props: {
      data,
    },
  };
};
