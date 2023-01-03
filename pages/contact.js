import {
  AiOutlineMail,
  AiOutlineGithub,
  AiOutlineLinkedin
} from "react-icons/ai";
import { GiPirateFlag } from "react-icons/gi";

const Contact = () => {
    return (
      <div className="h-screen flex flex-col justify-center items-center text-green-backgroundtext">
      <div className="flex flex-row justify-center items-center text-2xl">
      <GiPirateFlag className="mr-2"/>
      <h1>Meet The Boolean Pirates</h1>
      <GiPirateFlag className="ml-2"/>
      </div>

      <div className="flex flex-col justify-center items-center" >
        <AiOutlineGithub className="text-9xl "/>
        <div className="p-2 mt-2 max-w-2xl  bg-white rounded-lg border border-gray-200 shadow-md md:w-144">
        <h1 className="text-lg flex justify-center items-center"> Github Profiles : </h1>
        <ul>
        <li><a href= "https://github.com/JojokCreator"> Joe Klakus: https://github.com/JojokCreator </a></li>
        <li><a href= "https://github.com/afam-io"> Afam Okoh </a></li>
        <li><a href= "https://github.com/tassanee-atsa"> Tassanee Atsawajuramanee </a></li>
        <li><a href= "https://github.com/HairiBeast"> Harri Best </a></li>
        <li><a href= "https://github.com/danielknight261"> Daniel Knight </a></li>
        <li><a href= "https://github.com/Musy88"> Mustafa Mohamad </a></li>
        </ul>
        </div>
        </div>

        <div className="flex flex-col justify-center items-center">
        <AiOutlineLinkedin className="text-9xl"/>
        <div className="p-2 mt-2 max-w-2xl  bg-white rounded-lg border border-gray-200 shadow-md md:w-144">
        <h1 className="text-lg flex justify-center items-center"> Linkedin Profiles : </h1>
        <ul>
        <li><a href= "https://github.com/JojokCreator"> Joe Klakus </a></li>
        <li><a href= "https://www.linkedin.com/in/afam-okoh-64328876"> Afam Okoh </a></li>
        <li><a href= "https://www.linkedin.com/in/tassanee-atsawajuramanee-b0a72b248/"> Tassanee Atsawajuramanee </a></li>
        <li><a href= "www.linkedin.com/in/harri-best"> Harri Best </a></li>
        <li><a href= "https://www.linkedin.com/in/daniel-knight-0b408123b"> Daniel Knight </a></li>
        <li><a href= "https://www.linkedin.com/in/mustafa-mohamad88/"> Mustafa Mohamad </a></li>
        </ul>
        </div>
        </div>
        </div>
      );
}
 
export default Contact;