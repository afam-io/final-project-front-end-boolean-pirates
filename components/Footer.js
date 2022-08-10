import Link from 'next/link';
import {
  AiOutlineMail,
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineYoutube,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";

const Footer = () => {
  return (
    <nav className="bg-green-backgroundtext p-1 mt-8">
      <div className="flex justify-between text-white ">
        <div className=" ml-6 pt-1">
          <p>Copyright 2022 Boolean Pirates</p>
        </div>
        <Link href='/contact'>
        <div className="flex float-right hover:bg-green-700  text-3xl mr-6">
          <AiOutlineMail className="mr-1" />
          <AiOutlineFacebook className="mr-1" />
          <AiOutlineTwitter className="mr-1" />
          <AiOutlineYoutube className="mr-1" />
          <AiOutlineLinkedin className="mr-1" />
          <AiOutlineGithub className="mr-1" />
          </div>
          </Link>
      </div>
    </nav>
  );
};

export default Footer;
