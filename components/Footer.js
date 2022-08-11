import Link from 'next/link';
import {
  AiOutlineCopyrightCircle,
  AiOutlineMail,
  AiOutlineGithub,
  AiOutlineLinkedin
} from "react-icons/ai";

const Footer = () => {
  return (
    <nav className="bg-green-backgroundtext p-1 mt-8 ">
      <div className="flex justify-between text-white ">
        <div className="flex justify-content ml-6 pt-1">
        <AiOutlineCopyrightCircle className="pt-1"/>
        <p> 2022 Boolean Pirates</p>
        </div>
        <Link href='/contact'>
        <div className="flex float-right hover:bg-green-700  text-3xl mr-6 pl-1 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-500 focus:ring-white hover:cursor-pointer">
          <AiOutlineMail className="mr-1" />
          <AiOutlineGithub className="mr-1" />
          <AiOutlineLinkedin className="mr-1" />
          </div>
          </Link>
      </div>
    </nav>
  );
};

export default Footer;
