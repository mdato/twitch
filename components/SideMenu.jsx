import React from "react";
import { rec_channels, top_channels } from "../data/mock_data";
import { RiMovieLine } from "react-icons/ri";
import { BsDot } from "react-icons/bs";
import Image from "next/image";

const SideMenu = () => {
  return (
    <div className="fixed w-14 sm:w-16 xl:w-[15rem] h-screen p-2 bg-[#0e0e10]">
      <div>
        <p className="hidden xl:flex uppercase font-bold text-xs pb-2">
          Recommended Channels
        </p>
        <p>
          <RiMovieLine size={20} className="xl:hidden justify-center w-full" />
        </p>
      </div>

      {rec_channels.map((item, index) => (
        <div key={index} className="inline-flex items-center w-full py-[0]">
          <div>
            <Image
              src={item.avatar}
              width="50"
              height="50"
              alt={item.username}
            />
          </div>
          <div className="hidden xl:flex justify-between w-full">
            <div>
              <p className="text-gray-100 text-sm">{item.username}</p>
              <p className="text-gray-400 text-sm">{item.game_name}</p>
            </div>
            <p className="flex items-center text-sm">
              <BsDot color="red" size={30} />
              {item.rank}k
            </p>
          </div>
        </div>
      ))}

      <div>
        <p className="hidden xl:flex uppercase font-bold text-xs py-2">
          Top Channels
        </p>
        <p>
          <RiMovieLine size={20} className="xl:hidden justify-center w-full" />
        </p>
      </div>

      {top_channels.map((item, index) => (
        <div key={index} className="inline-flex items-center w-full py-[0]">
          <div>
            <Image
              src={item.avatar}
              width="50"
              height="50"
              alt={item.username}
            />
          </div>
          <div className="hidden xl:flex justify-between w-full">
            <div>
            <p className="text-gray-100 text-sm">{item.username}</p>
              <p className="text-gray-400 text-sm">{item.game_name}</p>
            </div>
            <p className="flex items-center text-sm">
              <BsDot color="red" size={30} />
              {item.rank}k
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SideMenu;
