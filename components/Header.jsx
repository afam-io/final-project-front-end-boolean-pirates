import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { AiOutlineHome, AiOutlineRead, AiOutlinePlus } from "react-icons/ai";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);    
    return (
      <div>
        <nav className="bg-green-backgroundtext">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center">
                <div className="flex-shrink-0 ml-10 flex items-baseline space-x-4 text-white px-3 py-2 rounded-md text-sm font-medium ">
              
                  <img 
                    className="h-8"
                    src="https://i.ibb.co/2NTjXs4/logo.png"
                    alt="logo"
                  />
                  <div className="md:hidden ml-10 flex items-baseline space-x-4">
                   <div className="w-6 h-6 flex place-items-center">
                    <p><AiOutlineHome/>Home</p>
                   </div>
                  <p><AiOutlineRead/>Tutorials</p>
                  <p><AiOutlinePlus/>Create</p>
                  </div>
                </div>
                
        
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
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
              <div className="-mr-2 flex md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
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
              <div className="md:hidden" id="mobile-menu">
                <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  <a
                    href="#"
                    className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Search
                  </a>
  
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Profile
                  </a>
  
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Favourites
                  </a>
  
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
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
