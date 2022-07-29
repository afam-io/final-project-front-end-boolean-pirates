import Header from "../components/Header";
import Card from "../components/card.jsx";
import Image from "next/image";

export default function Home() {

  const mockData = [{
    imageURL: "https://opensourcelowtech.org/tutorials/dish/images/100_7348.JPG",
    title: "Wifi/Mobile Reflector Dish",
    description: "This is a paraboloidal reflector dish, more or less a sattelite dish, that can easily be made from one sheet of plywood or other board, chicken wire or other mesh, and cable/zip ties. It works by reflecting wifi or mobile signal and focusing them onto a receiver such as your phone, USB wifi adaptor, hotspotN, etc.",
    materials:["plywood","wire","cable ties"]
    },
    {
      imageURL: "https://opensourcelowtech.org/tutorials/dish/images/100_7348.JPG",
      title: "Wifi/Mobile Reflector Dish",
      description: "This is a paraboloidal reflector dish, more or less a sattelite dish, that can easily be made from one sheet of plywood or other board, chicken wire or other mesh, and cable/zip ties. It works by reflecting wifi or mobile signal and focusing them onto a receiver such as your phone, USB wifi adaptor, hotspotN, etc.",
      materials:["plywood","wire","cable ties"]
      },
    {
      imageURL: "https://opensourcelowtech.org/tutorials/dish/images/100_7348.JPG",
      title: "Wifi/Mobile Reflector Dish",
      description: "This is a paraboloidal reflector dish, more or less a sattelite dish, that can easily be made from one sheet of plywood or other board, chicken wire or other mesh, and cable/zip ties. It works by reflecting wifi or mobile signal and focusing them onto a receiver such as your phone, USB wifi adaptor, hotspotN, etc.",
      materials:["plywood","wire","cable ties"]
      },
      {
        imageURL: "https://opensourcelowtech.org/tutorials/dish/images/100_7348.JPG",
        title: "Wifi/Mobile Reflector Dish",
        description: "This is a paraboloidal reflector dish, more or less a sattelite dish, that can easily be made from one sheet of plywood or other board, chicken wire or other mesh, and cable/zip ties. It works by reflecting wifi or mobile signal and focusing them onto a receiver such as your phone, USB wifi adaptor, hotspotN, etc.",
        materials:["plywood","wire","cable ties"]
        }]

  return (
    <>
      <Header />
      <div className="relative justify-self-center">
      <Image
        src="https://static.vecteezy.com/system/resources/previews/004/828/251/large_2x/working-together-to-protect-the-environment-earth-day-two-hands-hold-the-two-green-worlds-together-environment-and-reduce-global-warming-help-the-world-in-ecological-sustainability-concept-free-photo.jpg"  
        width={1425}
        height={980}
        alt="main-image"
      />
      <div className="absolute bottom-8 left-0 right-0 px-4 py-2 bg-gray-300 opacity-70">
        <h1 className="mt-2 text-4xl text-black-300">
          From wind turbines to window farms, find your next project with
          Redeem.
        </h1>
      </div>
      </div>
      <div className="flex items-center justify-center">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {mockData.map((mockData, index) => 
      <div key={index} className="m-2">
      <Card
        imageURL={mockData.imageURL}
        title={mockData.title}
        description={mockData.description}
        materials={mockData.materials}
      />
      </div>
      )}
      </div>
      </div>
    </>
  );
}
