import React from "react";
import Image from "next/image";

const IconBar = () => {
  return (
    <div className="p-2 md:p-8">
      {/* Container */}
      <div className="grid xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 border-t border-gray-700 py-8">
        {/* Grid Item */}
        <div className="w-full h-[50px] bg-[#9147ff] flex justify-between items-center px-4 rounded">
          <p className="text-2xl font-bold">Games</p>
          <Image src='https://twitch-nextjs-tailwind.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fremote.25e91e42.png&w=96&q=75' alt='/' width='96' height='75' />
        </div>

         {/* Grid Item */}
         <div className="w-full h-[50px] bg-[#9147ff] flex justify-between items-center px-4 rounded">
          <p className="text-2xl font-bold">IRL</p>
          <Image src='https://twitch-nextjs-tailwind.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmic.cb221a48.png&w=64&q=75' alt='/' width='64' height='75' />
        </div>

         {/* Grid Item */}
         <div className="w-full h-[50px] bg-[#9147ff] flex justify-between items-center px-4 rounded">
          <p className="text-2xl font-bold">Music</p>
          <Image src='https://twitch-nextjs-tailwind.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheadphones.c8ab5419.png&w=96&q=75' alt='/' width='96' height='75' />
        </div>

         {/* Grid Item */}
         <div className="w-full h-[50px] bg-[#9147ff] flex justify-between items-center px-4 rounded">
          <p className="text-2xl font-bold">Esports</p>
          <Image src='https://twitch-nextjs-tailwind.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftrophy.d9b479b9.png&w=64&q=75' alt='/' width='64' height='75' />
        </div>

         {/* Grid Item */}
         <div className="w-full h-[50px] bg-[#9147ff] flex justify-between items-center px-4 rounded">
          <p className="text-2xl font-bold">Creative</p>
          <Image src='https://twitch-nextjs-tailwind.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpaint.8d0c0c52.png&w=96&q=75' alt='/' width='96' height='75' />
        </div>

      </div>
    </div>
  );
};

export default IconBar;
