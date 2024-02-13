import React from "react";
import Option_4 from "../../../Assets/option4.jpg";
import Image from "next/image";

const Option4 = () => {
  return (
    <div className='w-[100%] h-[100%]'>
      <Image
        src={Option_4}
        alt="home"
        className="block object-cover w-[100%] h-[100%] transition-[2s]"
      />
    </div>
  );
};

export default Option4;
