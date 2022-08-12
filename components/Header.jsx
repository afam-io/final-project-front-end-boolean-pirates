import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import Image from 'next/image';
import {
  AiOutlineHome,
  AiOutlinePlus,
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineContacts,
} from 'react-icons/ai';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BsHandThumbsUp } from 'react-icons/bs'

const Header = ({ user, loading }) => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  return (
    <div>
      <div>
        {/* wrapper for the whole nav bar */}
        <nav className='bg-green-backgroundtext fixed w-full z-10 pt-0.5'>

          {/* logo */}
          <Link href="/">
            <Image
              className='h-8 float-left mt-2 ml-3'
              src='/images/logo.png'
              alt='logo'
              width='250px'
              height='50px'
            />
          </Link>

          {/* login/logout button terniery operator to show conditionally */}
          {!loading &&
            user ?
            <button className="float-right bg-white-cardbackground hover:bg-gray-300 font-medium text-gray-700 py-0.9 px-3 m-3.5 border border-gray-300 rounded-3xl">
              <Link href="/api/auth/logout">Logout</Link>
            </button>
            :
            <button className="float-right bg-white-cardbackground hover:bg-gray-300 font-medium text-gray-700 py-0.9 px-3 m-3.5 border border-gray-300 rounded-3xl">
              <Link href="/api/auth/login">Login</Link>
            </button>
          }
          {/* wrapper for the whole navbar */}
          <div className='flex items-center max-w-fit mx-auto'>

            {/* links in the middle of the navbar */}
            <div className='flex items-center justify-between h-30'>
              <div className='flex items-center'>
                {/* styles for the mobile menu */}
                <div className=' flex-shrink-0 ml-0 flex items-baseline space-x-6 text-white px-0 py-2 rounded-md text-sm font-medium'>
                  {/* individual mobile links wrapper */}
                  <div className='md:hidden ml-0 flex items-baseline space-x-9'>
                    {/* wrapper for individual mobile link */}
                    <Link href='/'>
                      <li className='block items-center justify-center sm:px-7 px-2 rounded-md text-white hover:text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-500 focus:ring-white hover:cursor-pointer'>
                        {/* wrapper for navbar icon and the icon */}
                        <div className='block h-5 w-5 ml-1 text-3xl mb-2'>
                          <AiOutlineHome />
                        </div>
                        {(router.pathname) === '/' ?
                          <p className="underline">Home</p>
                          :
                          <p >Home</p>}
                      </li>
                    </Link>
                    {/* wrapper for individual mobile link */}
                    <Link href='/search'>
                      <li className='block items-center justify-center sm:px-7 px-2 rounded-md text-white hover:text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-500 focus:ring-white hover:cursor-pointer'>
                        <div className='block h-6 w-6 pl-3 text-3xl mb-1'>
                          <AiOutlineSearch />
                        </div>
                        {(router.pathname) === '/search' ?
                          <p className="underline">Search</p>
                          :
                          <p>Search</p>}
                      </li>
                    </Link>
                    {/* wrapper for individual mobile link */}
                      <Link href='/createtutorials'>
                        <li className='block items-center justify-center sm:px-7 px-2 rounded-md text-white hover:text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-500 focus:ring-white hover:cursor-pointer'>
                          <div className='block h-6 w-6 ml-2 text-3xl mb-1'>
                            <AiOutlinePlus />
                          </div>
                          {(router.pathname) === '/createtutorials' ?
                            <p className="underline">Create</p>
                            :
                            <p>Create</p>}
                        </li>
                      </Link>
                  </div>
                </div>

                <div className='hidden md:block '>
                  {/* wrapper for desktop view middle link items */}
                  {/* TODO need to space out these links for the mobile site */}
                  <div className='flex px-20 justify-around max-w-full w-screen '>
                    <Link href='/'>
                      <li
                        className='hover:bg-green-700  text-white px-3 py-2 rounded-md text-lg font-medium list-none hover:cursor-pointer'>
                        {(router.pathname) === '/' ?
                          <p className="underline">Home</p>
                          :
                          <p >Home</p>}
                      </li>
                    </Link>
                    <Link href='/search'>
                      <li
                        className=' hover:bg-green-700 text-white px-3 py-2 rounded-md text-lg font-medium list-none hover:cursor-pointer'>
                        {(router.pathname) === '/search' ?
                          <p className="underline">Search</p>
                          :
                          <p >Search</p>}
                      </li>
                    </Link>
                      <Link href='/createtutorials'>
                        <li
                          className=' hover:bg-green-700 text-white px-3 py-2 rounded-md text-lg font-medium list-none hover:cursor-pointer'>
                          {(router.pathname) === '/createtutorials' ?
                            <p className="underline">Create</p>
                            :
                            <p >Create</p>}
                        </li>
                      </Link>
                    {(user === null) ?
                      <Link href='/api/auth/login'>
                        <li
                          className=' hover:bg-green-700 text-white px-3 py-2 rounded-md text-lg font-medium list-none hover:cursor-pointer'>
                          {(router.pathname) === '/profile' ?
                            <p className="underline">Profile</p>
                            :
                            <p >Profile</p>}
                        </li>
                      </Link>
                      :
                      <Link href='/profile'>
                        <li
                          className=' hover:bg-green-700 text-white px-3 py-2 rounded-md text-lg font-medium list-none hover:cursor-pointer'>
                          {(router.pathname) === '/profile' ?
                            <p className="underline">Profile</p>
                            :
                            <p >Profile</p>}
                        </li>
                      </Link>}
                      <Link href='/favourites'>
                        <li
                          className=' hover:bg-green-700 text-white px-3 py-2 rounded-md text-lg font-medium list-none hover:cursor-pointer'>
                          {(router.pathname) === '/favourites' ?
                            <p className="underline">Favourites</p>
                            :
                            <p >Favourites</p>}
                        </li>
                      </Link>
                    <Link href='/events'>
                      <li
                        href='#'
                        className=' hover:bg-green-700 text-white px-3 py-2 rounded-md text-lg font-medium list-none hover:cursor-pointer'>
                        {(router.pathname) === '/events' ?
                          <p className="underline">Events</p>
                          :
                          <p >Events</p>}
                      </li>
                    </Link>
                  </div>
                </div>
              </div>
              {/* wrapper around the more button */}
              <div className='pl-10 md:hidden'>
                {/* mobile more button */}
                {/* TODO need to align this button with icons */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type='button'

                  className='inline-flex items-center justify-center pt-1 h-13 w-19.8 px-2 rounded-md text-white hover:text-white  focus:outline-none  hover:bg-green-700'

                  aria-controls='mobile-menu'
                  aria-expanded='false'>
                  <span className='sr-only'>Open main menu</span>
                  <div>
                    {!isOpen ? (
                      <svg
                        className='block h-7 w-8'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        aria-hidden='true'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M4 6h16M4 12h16M4 18h16'
                        />
                      </svg>
                    ) : (
                      <svg
                        className='block h-8 w-8'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        aria-hidden='true'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M6 18L18 6M6 6l12 12'
                        />
                      </svg>
                    )}
                    <p className="text-white rounded-md text-sm font-medium">
                      More
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <Transition
            show={isOpen}
            enter='transition ease-out duration-100 transform'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='transition ease-in duration-75 transform'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'>
            {(ref) => (
              <div className='md:hidden' id='mobile-menu '>
                <div ref={ref} className='px-2 pt-2 space-y-1 sm:px-3'>
                  {(user === null) ?
                    <Link href='/api/auth/login' >
                      <li onClick={() => setIsOpen(!isOpen)} className='block items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-500 focus:ring-white hover:cursor-pointer'>
                        <div className='block h-5 w-5 text-3xl mb-2 ml-6'>
                          <AiOutlineUser />
                        </div>
                        {(router.pathname) === '/profile' ?
                          <p className="underline ml-4">Profile</p>
                          :
                          <p className="ml-4">Profile</p>}
                      </li>
                    </Link>
                    :
                    <Link href='/profile' >
                      <li onClick={() => setIsOpen(!isOpen)} className='block items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-500 focus:ring-white hover:cursor-pointer'>
                        <div className='block h-5 w-5 text-3xl mb-2 ml-6'>
                          <AiOutlineUser />
                        </div>
                        {(router.pathname) === '/profile' ?
                          <p className="underline ml-4">Profile</p>
                          :
                          <p className="ml-4">Profile</p>}
                      </li>
                    </Link>}
                    <Link href='/favourites'>
                      <li onClick={() => setIsOpen(!isOpen)} className='block items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-500 focus:ring-white hover:cursor-pointer'>
                        <div className='block h-5 w-5 text-3xl mb-2 ml-6'>
                          <BsHandThumbsUp />
                        </div>
                        {(router.pathname) === '/favourites' ?
                          <p className="underline">Favourites</p>
                          :
                          <p >Favourites</p>}
                      </li>
                    </Link>
                  <Link href='/events'>
                    <li onClick={() => setIsOpen(!isOpen)} className='block items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-500 focus:ring-white hover:cursor-pointer'>
                      <div className='block h-5 w-5 ml-6 text-3xl mb-2'>
                        <AiOutlineContacts />
                      </div>
                      {(router.pathname) === '/events' ?
                        <p className="underline ml-4">Events</p>
                        :
                        <p className="ml-4">Events</p>}
                    </li>
                  </Link>
                </div>
              </div>
            )}
          </Transition>
        </nav>
      </div>
    </div>
  );
};
export default Header;
