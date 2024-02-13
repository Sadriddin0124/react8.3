import React from 'react'
import Option_5 from "../../../Assets/option5.jpg";
import Image from 'next/image';

const Option5 = () => {
  return (
    <div className='w-[100%] h-[100%]'>
       <Image
          src={Option_5}
          alt="home"
          className="object-cover block w-[100%] h-[100%] transition-[2s]"
        />
    </div>
  )
}

export default Option5
