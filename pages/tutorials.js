import Header from "../components/Header";
import Card from "../components/Card";
import Image from "next/image";

export default function tutorials() {
  // mock data used to test layout
  const mockData = [
    {
      imageURL: "/images/template.jpg",
      title: "Wifi/Mobile Reflector Dish",
      description:
        "This is a paraboloidal reflector dish, more or less a sattelite dish, that can easily be made from one sheet of plywood or other board, chicken wire or other mesh, and cable/zip ties. It works by reflecting wifi or mobile signal and focusing them onto a receiver such as your phone, USB wifi adaptor, hotspotN, etc.",
      materials: ["plywood", "wire", "cable ties"],
    },
    {
      imageURL: "/images/template.jpg",
      title: "Wifi/Mobile Reflector Dish",
      description:
        "This is a paraboloidal reflector dish, more or less a sattelite dish, that can easily be made from one sheet of plywood or other board, chicken wire or other mesh, and cable/zip ties. It works by reflecting wifi or mobile signal and focusing them onto a receiver such as your phone, USB wifi adaptor, hotspotN, etc.",
      materials: ["plywood", "wire", "cable ties"],
    },
    {
      imageURL: "/images/template.jpg",
      title: "Wifi/Mobile Reflector Dish",
      description:
        "This is a paraboloidal reflector dish, more or less a sattelite dish, that can easily be made from one sheet of plywood or other board, chicken wire or other mesh, and cable/zip ties. It works by reflecting wifi or mobile signal and focusing them onto a receiver such as your phone, USB wifi adaptor, hotspotN, etc.",
      materials: ["plywood", "wire", "cable ties"],
    },
    {
      imageURL: "/images/template.jpg",
      title: "Wifi/Mobile Reflector Dish",
      description:
        "This is a paraboloidal reflector dish, more or less a sattelite dish, that can easily be made from one sheet of plywood or other board, chicken wire or other mesh, and cable/zip ties. It works by reflecting wifi or mobile signal and focusing them onto a receiver such as your phone, USB wifi adaptor, hotspotN, etc.",
      materials: ["plywood", "wire", "cable ties"],
    },
  ];

  // ========= On Click Event Handler ==============
  function tutorialsSearch(event) {
    console.log(`Search logged`);
    event.preventDefault();
  }

  return (
    //whole layout
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
              id="default-search"
              className="grid p-4 pl-10 w-full text-sm shadow-md focus:outline-none focus:ring-green-500 focus:border-green-500 mt-1 sm:text-sm border border-gray-300 rounded-xl"
              placeholder="Search Tutorials, Materials..."
              required
            />
            <button
              type="submit"
              // onClick Event for Function above
              onClick={tutorialsSearch}
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
      <div className="flex items-center justify-center">
        {/* media query which shows different amount of cards on different screen sizes */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {mockData.map((mockData, index) => (
            <div key={index} className="m-2">
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
