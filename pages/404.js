import Link from "next/link";

const NotFound = () => {
  return (
    <div className="text-center text-xl pt-20">
      <h1 className="p-2">Oooooops 404 Error</h1>
      <h2 className="p-2">Sorry Redeemers this page cannot be found</h2>
      <div className="pt-3">
        <button className="bg-green-900 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
          <Link href="/">Go back to the Homepage</Link>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
