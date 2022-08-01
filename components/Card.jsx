import Image from "next/image";
import { AiOutlineLike } from "react-icons/ai";

const Card = ({
  imageURL,
  title,
  description,
  materials
}) => {
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <Image className="w-full" src={imageURL} alt={title} height="450px" width="600px"/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="px-6 pt-4 pb-2" >
        {materials.map((material, index) => 
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" key={index}>
            {material}
          </span>
        )}
          <p className="text-4xl float-right"><AiOutlineLike/></p>
        </div>
      </div>
    </div>
  );
};

export default Card;
