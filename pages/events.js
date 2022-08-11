import dynamic from 'next/dynamic';

const DynamicComponentWithNoSSR = dynamic(() => import( '../components/Map'), {
  ssr: false
});

export default function MapPage() {
  return (
    <div className="mt-5 h-screen">
  <DynamicComponentWithNoSSR />
  </div>
  )
}