import React from 'react'
import Option_2 from "../../../Assets/option2.jpg";
import Image from 'next/image';

const Option2 = () => {
  return (
    <div className='w-[100%] h-[100%]'>
      <Image
          src={Option_2}
          alt="home"
          className="block object-cover w-[100%] h-[100%] transition-[2s]"
        />
    </div>
  )
}

export default Option2
