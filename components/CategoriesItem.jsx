import React from "react";
import Image from "next/image";

const CategoriesItem = ({ img, title, viewers, tag1, tag2 }) => {
  return (
    <div className="p-2">
<div className="transform transition-all hover:-translate-x-2 hover:-translate-y-2 hover:drop-shadow-[8px_8px_0px_rgb(145,70,254)]">
      <Image src={img} width="261" height="350" alt="/" />
</div>
      <div className="">
        <p className="font-bold">{title}</p>
        <p className="text-sm text-gray-500 py-[2px]">{viewers}</p>
        <div className="flex">
          <div className="">
            <p className="text-sm bg-gray-700 rounded-full inline-block p-[2px] px-3">
              {tag1}
            </p>
          </div>


            <div className="">
{tag2 ? (              <p className="text-sm bg-gray-700 rounded-full inline-block p-[2px] px-3">
                {tag2}
              </p>) : null} 

          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesItem;
