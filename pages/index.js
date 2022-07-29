import Header from "../components/Header";
import Card from "../components/card.jsx";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <div className="bg-black w-full h-5 text-white">current version</div>
      <Image
        src="https://static.vecteezy.com/system/resources/previews/004/828/251/large_2x/working-together-to-protect-the-environment-earth-day-two-hands-hold-the-two-green-worlds-together-environment-and-reduce-global-warming-help-the-world-in-ecological-sustainability-concept-free-photo.jpg"
        width={2835}
        height={1960}
      />
      <div>
        <h2>
          From wind turbines to window farms, find your next project with
          Redeem. Hi there
        </h2>
      </div>

      <Card
        imageURL="/img/card-top.jpg"
        title="Frozen Lake"
        description=" Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        hashtag1="cheese"
        hashtag2="bread"
        hashtag3="cake"
      />
    </>
  );
}
