import React from 'react'
import Image from 'next/image';

const LiveChannelItem = ({img, profile_img, title, user, game}) =>  {
  return (
    <div className='p-2'>
  <div className="transform transition-all hover:-translate-x-2 hover:-translate-y-2 hover:drop-shadow-[8px_8px_0px_rgb(145,70,254)]">
        <Image src={img} />
      </div>
        <div className="flex pt-2">
            <div className="pr-2">
                <Image src={profile_img} alt='/' width='60' height='60' className='rounded-full' />
            </div>
            <div className="">
                <p className='text-sm font-bold'>{title}</p>
                <p className=' text-sm text-gray-500'>{user}</p>
                <p className=' text-sm text-gray-500'>{game}</p>
                </div>
        </div>
        
    </div>
  )
}

export default LiveChannelItem