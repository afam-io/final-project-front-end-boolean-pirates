import Card from '../components/Card';
import Image from 'next/image';

export default function tutorials() {
  // mock data used to test layout
  const mockData = [
    {
      imageURL: '/images/template.jpg',
      title: 'wi-fi/Mobile Reflector Dish',
      description:
        'This is a paraboloidal reflector dish, more or less a sattelite dish, that can easily be made from one sheet of plywood or other board, chicken wire or other mesh, and cable/zip ties. It works by reflecting wi-fi or mobile signal and focusing them onto a receiver such as your phone, USB wi-fi adaptor, hotspotN, etc.',
      materials: ['plywood', 'wire', 'cable ties'],
    },
    {
      imageURL: '/images/template.jpg',
      title: 'wi-fi/Mobile Reflector Dish',
      description:
        'This is a paraboloidal reflector dish, more or less a sattelite dish, that can easily be made from one sheet of plywood or other board, chicken wire or other mesh, and cable/zip ties. It works by reflecting wi-fi or mobile signal and focusing them onto a receiver such as your phone, USB wi-fi adaptor, hotspotN, etc.',
      materials: ['plywood', 'wire', 'cable ties'],
    },
    {
      imageURL: '/images/template.jpg',
      title: 'wi-fi/Mobile Reflector Dish',
      description:
        'This is a paraboloidal reflector dish, more or less a sattelite dish, that can easily be made from one sheet of plywood or other board, chicken wire or other mesh, and cable/zip ties. It works by reflecting wi-fi or mobile signal and focusing them onto a receiver such as your phone, USB wi-fi adaptor, hotspotN, etc.',
      materials: ['plywood', 'wire', 'cable ties'],
    },
    {
      imageURL: '/images/template.jpg',
      title: 'wi-fi/Mobile Reflector Dish',
      description:
        'This is a paraboloidal reflector dish, more or less a sattelite dish, that can easily be made from one sheet of plywood or other board, chicken wire or other mesh, and cable/zip ties. It works by reflecting wi-fi or mobile signal and focusing them onto a receiver such as your phone, USB wi-fi adaptor, hotspotN, etc.',
      materials: ['plywood', 'wire', 'cable ties'],
    },
  ];

  // ========= OnChange Event Handler for input ==============
  function handleInput(e) {
    event.preventDefault();
    console.log(e.target.value);
  }

  return (
    //whole layout

    <div>
      {/* wrapper for the image and text */}
      <div className='relative justify-self-center'>
        {/* ===== Search Bar ======= TODO: NEEDS TO BE MOVED UNDER IMAGE TEXT CARD */}
        <div className='w-2/3 px-4 py-5 place'>
          <form>
            <label
              htmlFor='default-search'
              className='m-4 text-sm font-medium text-gray-900 sr-only dark:text-gray-300'>
              Search
            </label>
            <div className='relative'>
              <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                <svg
                  aria-hidden='true'
                  className='w-5 h-5 text-gray-500 dark:text-gray-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
                </svg>
              </div>
              <input
                type='search'
                id='default-search'
                className='block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Search Mock-ups, Logos...'
                required
              />
              <button
                type='submit'
                className='text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                Search
              </button>
            </div>
          </form>
        </div>
        {/* card */}
        <div className='absolute bottom-8 left-0 right-0 px-4 py-2 bg-gray-300 opacity-70'>
          <h1 className='mt-2 sm:text-3xl text-black-300'>
            From wind turbines to window farms, find your next project with
            Redeem.
          </h1>
        </div>

    <div className="w-screen">
      {/* ===== Search Bar ======= */}
      <div className="flex justify-center px-4 py-5">
        {/* form div which wraps tightly around input */}
        <form className="flex w-screen justify-center">
          <label
            htmlFor="default-search"
            className="m-4 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >
            Search
          </label>
          {/* Div around search form and button - This is where sizing of search bar is set */}
          <div className="relative w-5/6">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              onChange={handleInput}
              id="default-search"
              className="grid p-4 pl-10 w-full text-sm shadow-md focus:outline-none focus:ring-green-500 focus:border-green-500 mt-1 sm:text-sm border border-gray-300 rounded-xl"
              placeholder="Search Tutorials, Materials..."
              required
            />
            <button
              type="submit"
              // onClick Event for Function above
              // onClick={}
              className="absolute right-1.5 bottom-1.5 p-2.5 ml-2 text-sm font-medium text-white bg-green-backgroundtext rounded-xl border border-green-700 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-700 dark:hover:bg-green-backgroundtext dark:focus:ring-green-800"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </form>

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
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
