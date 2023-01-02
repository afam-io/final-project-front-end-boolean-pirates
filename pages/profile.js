import React from 'react'
import Image from 'next/image'
import Card from '../components/Card'
import { useState } from 'react'
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useUser } from '@auth0/nextjs-auth0';

const Profile = ({ firstData }) => {
  const [data, setData] = useState(firstData)
  const { user, error, isLoading } = useUser();

  async function handleDelete(myCardId) {
    //post to backend to delete that post that a user was created

    const data = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/${myCardId}`,
      {
        method: "DELETE",

        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const response = await data.json();
    setData(
      await fetch(`${process.env.NEXT_PUBLIC_URL}/tutorials`).then((r) =>
        r.json()
      )
    );
  }

  return (
    <div className="mt-5 h-full min-h-screen">
      <div>
        <div className="shadow-lg">
          <div className="flex justify-center py-10 bg-gradient-to-r from-sky-200 via-teal-200 to-sky-200">
            <div>
              <Image
                className="inline object-cover w-8 h-8 rounded-full border-stone-900"
                src={user?.picture}
                alt={user?.sub}
                height="100%"
                width="100%"
              />
            </div>
          </div>
          <div>
            <p className="sm:text-2xl text-black-300 pt-5 pb-4 text-center">
              {user?.name}
            </p>
            <p className="sm:text-1xl text-black-300 pb-5 text-center">
              {" "}
              Last logged in : {user?.updated_at}
            </p>
          </div>
        </div>

        {/* card */}
        <div className="flex justify-center sm:text-1xl text-lg font-semibold font-sans text-green-backgroundtext py-12">
          <p>My Uploads</p>
        </div>
      </div>
      {/* card holder that aligns the cards to center */}
      <div className="flex items-center justify-center">
        {/* media query which shows different amount of cards on different screen sizes */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {data
            .filter((myCard) => myCard.creator === user?.name)
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
                  creator={data.creator}
                  creatorImageUrl={data.creator_image_url[0]}
                />
                <div className="bg-red-500 hover:bg-red-700 text-white text-center px-4 mt-2 rounded hover:cursor-pointer">
                  <button
                    onClick={() => {
                      handleDelete(data._id);
                    }}
                  >
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
