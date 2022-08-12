import Card from "../components/Card";
import Image from "next/image";
import { useUser } from '@auth0/nextjs-auth0';

export default function Home({ data }) {
  const { user, error, isLoading } = useUser();

  return (
    //whole layout
    <div>
      {/* wrapper for the image and text */}
      <div className="relative justify-self-center w-full h-80 md:min-w-fit">
        {/* TODO fix the white space on full screen on the left */}
        <Image
          src="/images/full-screen-hero-image.jpg"
          layout="fill"
          objectFit="cover"
          alt="main-image"
        />
        {/* card */}
        <div className="lg:block absolute text-center bottom-4 left-0 right-0 px-4 py-2 p-4 bg-gray-300 opacity-70 w-10/12 mx-auto rounded-lg">
          <h1 className="text-xl lg:text-3xl text-green-backgroundtext">
            Connect with eco-minded creators who are looking to halt waste and
            help the environment.
          </h1>
        </div>
      </div>
      {/* this is currently unused */}
      <div className="hidden mt-3 text-center bottom-4 left-0 right-0 px-4 py-2 p-4 bg-gray-300 opacity-70 w-10/12 mx-auto rounded-lg">
        <h1 className="text-xl lg:text-3xl text-green-backgroundtext">
          From wind turbines to window farms, find your next project with
          Redeem.
        </h1>
      </div>
      {/* card holder that aligns the cards to center */}
      <div className="flex items-center justify-center mt-2">
        {/* media query which shows different amount of cards on different screen sizes */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-1">
          {/* Filters the first 6 results before mapping */}
          {data
            .filter((item, index) => index < 8)
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
                  creatorImageUrl={data.favourites[0]}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const data = await fetch(`https://backend-soc.herokuapp.com/tutorials`).then(
    (r) => r.json()
  );

  return {
    props: {
      data,
    },
  };
};
