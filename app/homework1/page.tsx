"use client";
import React, { useEffect, useState } from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Option1 from "./option1/page";
import Home from "./home/page";
import Option2 from "./option2/page";
import Option3 from "./option3/page";
import Option4 from "./option4/page";
import Option5 from "./option5/page";
type OptionType = {
  id: number;
  title: string;
};
type component = {
  id: number,
  components: React.ReactNode
}
const Homework1 = () => {
  const [options, setOptions] = useState<Array<OptionType>>([
    { id: 1, title: "Home" },
    { id: 2, title: "Option 1" },
    { id: 3, title: "Option 2" },
    { id: 4, title: "Option 3" },
    { id: 5, title: "Option 4" },
    { id: 6, title: "Option 5" },
  ]);
  const [id, setId] = useState<number>(1);
  useEffect(() => {
    let value: number = JSON.parse(localStorage.getItem("id") || '""');
    if(value){
      setId(value);
    }else {
      setId(1)
    }
  }, [id]);
  const SwitchStyle = (id: number) => {
    setId(id);
    let value: string = String(id);
    localStorage.setItem("id", value);
  };
  const [components,setComponents] = useState<Array<component>>([
    {id: 1, components: <Home/>},
    {id: 2, components: <Option1/>},
    {id: 3, components: <Option2/>},
    {id: 4, components: <Option3/>},
    {id: 5, components: <Option4/>},
    {id: 6, components: <Option5/>},
  ])
  return (
    <div className="w-[100%] h-[100vh] flex justify-center items-center">
      <div className="h-[90%] w-[30%] bg-slate-200 flex flex-col">
        {options?.map((item, index) => {
          return (
            <div
              onClick={() => SwitchStyle(item.id)}
              key={index}
              className={`gap-[10px] text-black font-[500] flex w-[100%] p-[10px] mb-[2px] items-center cursor-pointer hover:bg-violet-500 hover:text-white transition-[.3s] ${
                id === item.id ? "bg-violet-500 text-white" : ""
              }`}
            >
              <MdOutlineArrowForwardIos
                className={
                  id === item.id
                    ? "rotate-[90deg] transition-all"
                    : "rotate-[0deg] transition-all"
                }
              />
              <h1 className="transition-all">{item.title}</h1>
            </div>
          );
        })}
      </div>
      <div className="h-[90%] w-[40%] bg-white p-[20px] border-2 overflow-hidden">
        {
          components.filter(item=> item.id === id).map((item)=> item.components)
        }
      </div>
    </div>
  );
};

export default Homework1;
