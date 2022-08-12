import Card from "../components/Card";
import Image from "next/image";
import { useEffect, useState } from "react"
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default function Tutorials({ data, user }) {

  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    let likedData = (data.filter((alldata => alldata.likes.includes(user?.sub))))
    setFilteredData(likedData)

  }, [data, user?.sub])

  return (
    //whole layout
    <div className="mt-10 h-screen ">
    <div className="flex justify-center sm:text-2xl text-black-300">
      Favourites
    </div>
      {/* wrapper for the image and text */}
      <div className="pt-5 relative justify-self-center">
        {/* card */}
        <div className="w-screen">
          {/* card holder that aligns the cards to center */}
          <div className="flex items-center justify-center">
            {/* media query which shows different amount of cards on different screen sizes */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {filteredData.map((data, index) => (
                <div
                  key={index}
                  className="m-2"
                  onClick={() => {
                  }}
                >
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
      </div>
    </div>
  );
}
export const getServerSideProps = withPageAuthRequired({
  getServerSideProps: async () => {

    const data = await fetch(`https://redeem-soc.herokuapp.com/tutorials`).then(
      (r) => r.json()
    );

    return {
      props: { data },
    }
  },
});
