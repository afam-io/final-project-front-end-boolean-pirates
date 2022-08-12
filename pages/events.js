import dynamic from 'next/dynamic';

const DynamicComponentWithNoSSR = dynamic(() => import( '../components/Map'), {
  ssr: false
});

export default function MapPage() {
  return (
    <div className="sticky mt-10 w-full h-screen">
            <div className="flex justify-center text-lg font-semibold font-sans text-green-backgroundtext sm:text-2xl text-black-300">
        Events
      </div>
      <div className="flex justify-center pt-2 text-base font-normal font-sans text-green-backgroundtext">
        Find your nearest eco-event below.
      </div>
  <DynamicComponentWithNoSSR />
  </div>
  )
}