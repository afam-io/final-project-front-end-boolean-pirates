import Card from '../components/Card';
import Image from 'next/image';

export default function Home() {
  const mockData = [
    {
      imageURL: '/images/template.jpg',
      title: 'Wifi/Mobile Reflector Dish',
      description:
        'This is a paraboloidal reflector dish, more or less a sattelite dish, that can easily be made from one sheet of plywood or other board, chicken wire or other mesh, and cable/zip ties. It works by reflecting wifi or mobile signal and focusing them onto a receiver such as your phone, USB wifi adaptor, hotspotN, etc.',
      materials: ['plywood', 'wire', 'cable ties'],
      likes: 27,
      date: "1st August 2022"
    },
    {
      imageURL: '/images/template.jpg',
      title: 'Wifi/Mobile Reflector Dish',
      description:
        'This is a paraboloidal reflector dish, more or less a sattelite dish, that can easily be made from one sheet of plywood or other board, chicken wire or other mesh, and cable/zip ties. It works by reflecting wifi or mobile signal and focusing them onto a receiver such as your phone, USB wifi adaptor, hotspotN, etc.',
      materials: ['plywood', 'wire', 'cable ties'],
      likes: 27,
      date: "1st August 2022"
    },
    {
      imageURL: '/images/template.jpg',
      title: 'Wifi/Mobile Reflector Dish',
      description:
        'This is a paraboloidal reflector dish, more or less a sattelite dish, that can easily be made from one sheet of plywood or other board, chicken wire or other mesh, and cable/zip ties. It works by reflecting wifi or mobile signal and focusing them onto a receiver such as your phone, USB wifi adaptor, hotspotN, etc.',
      materials: ['plywood', 'wire', 'cable ties'],
      likes: 25,
      date: "1st August 2022"
    },
    {
      imageURL: '/images/template.jpg',
      title: 'Wifi/Mobile Reflector Dish',
      description:
        'This is a paraboloidal reflector dish, more or less a sattelite dish, that can easily be made from one sheet of plywood or other board, chicken wire or other mesh, and cable/zip ties. It works by reflecting wifi or mobile signal and focusing them onto a receiver such as your phone, USB wifi adaptor, hotspotN, etc.',
      materials: ['plywood', 'wire', 'cable ties'],
      likes: 24,
      date: "1st August 2022"
    },
  ];

  // console.log(mockData.date)
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
          {mockData.map((mockData, index) => (
            <div key={index} className='m-2'>
              <Card
                imageURL={mockData.imageURL}
                title={mockData.title}
                description={mockData.description}
                materials={mockData.materials}
                likes={mockData.likes}
                date={mockData.date}
             />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
