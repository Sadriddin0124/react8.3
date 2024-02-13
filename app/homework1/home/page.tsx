import Image from "next/image";
import React from "react";
import HomeImg from "../../../Assets/home.jpg";

const Home = () => {
  return (
    <div className="w-[100%] h-[100%]">
      <Image
        src={HomeImg}
        alt="home"
        className="block object-cover w-[100%] h-[100%] transition-[2s]"
      />
    </div>
  );
};

export default Home;
