import React from 'react'
import Option_1 from "../../../Assets/option1.jpg";
import Image from 'next/image';

const Option1 = () => {
  return (
    <div className='w-[100%] h-[100%]'>
      <Image
          src={Option_1}
          alt="home"
          className="block object-cover w-[100%] h-[100%] transition-[2s]"
        />
    </div>
  )
}

export default Option1
