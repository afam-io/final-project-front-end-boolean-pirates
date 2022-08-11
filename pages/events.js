import dynamic from 'next/dynamic';

const DynamicComponentWithNoSSR = dynamic(() => import( '../components/Map'), {
  ssr: false
});

export default function MapPage() {
  return (
    <div className="sticky mt-5 w-full h-screen">
  <DynamicComponentWithNoSSR />
  </div>
  )
}