import Image from 'next/image'
import React from 'react'
import Option_3 from "../../../Assets/option3.jpg";

const Option3 = () => {
  return (
    <div className='w-[100%] h-[100%]'>
       <Image
          src={Option_3}
          alt="home"
          className="block object-cover w-[100%] h-[100%] transition-[2s]"
        />
    </div>
  )
}

export default Option3
