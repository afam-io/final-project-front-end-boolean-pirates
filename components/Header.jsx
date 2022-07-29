import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import {
  AiOutlineHome,
  AiOutlineRead,
  AiOutlinePlus,
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineContacts,
} from "react-icons/ai";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      {/* wrapper for the whole nav bar */}
      <nav className="bg-green-backgroundtext ">
        {/* logo */}
        <img
          className="h-8 float-left mr-4"
          src="https://i.ibb.co/2NTjXs4/logo.png"
          alt="logo"
        />
        {/* login button */}
        <p className="h-8 float-right bg-white-cardbackground hover:bg-gray-700 black-text font-bold py-1 px-1 rounded-md">Login</p>
        {/* wrapper for the whole navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* links in the middle of the navbar */}
          <div className="flex items-center justify-between h-30">
            <div className="flex items-center">
              {/* styles for the mobile menu */}
              <div className=" flex-shrink-0 ml-0 flex items-baseline space-x-6 text-white px-0 py-2 rounded-md text-sm font-medium">
                {/* individual mobile links wrapper */}
                <div className="md:hidden ml-0 flex items-baseline space-x-6">
                  {/* wrapper for individual mobile link */}
                  <div className="block items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    {/* wrapper for navbar icon and the icon */}
                    <div className="block h-6 w-6 text-4xl mb-2">
                      <AiOutlineHome />
                     </div>
                    <p>Home</p>
                  </div>
                  {/* wrapper for individual mobile link */}
                  <div className="border-8 border-red-500">
                    <div className="text-4xl border-1 ">
                      <AiOutlineRead />
                    </div>
                    <p>Tutorials</p>
                  </div>
                  {/* wrapper for individual mobile link */}
                  <div>
                    <div className="text-4xl border-1 ">
                     <AiOutlinePlus />
                    </div>
                    <p>Create</p>
                  </div>

                </div>
              </div>

              <div className="hidden md:block">
              {/* wrapper for desktop view middle link items */}
              {/* TODO need to space out these links for the mobile site */}
                <div className="flex"> 
                  <a
                    href="#"
                    className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Tutorials
                  </a>
                  <a
                    href="#"
                    className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Create
                  </a>
                  <a
                    href="#"
                    className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Search
                  </a>

                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Profile
                  </a>

                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Favourites
                  </a>

                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Events
                  </a>
                </div>
              </div>
            </div>
            {/* wrapper around the more button */}
            <div className="-mr-2 flex md:hidden">
              {/* mobile more button */}
              {/* TODO need to align this button with icons */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <div>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                  <p>More</p>
                </div>
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu ">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  {" "}
                  <AiOutlineSearch />
                  Search
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  {" "}
                  <AiOutlineUser />
                  Profile
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  {" "}
                  <AiOutlineHeart />
                  Favourites
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  {" "}
                  <AiOutlineContacts />
                  Events
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
};
export default Header;
