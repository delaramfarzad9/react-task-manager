import React from "react";
import Svg from "../SvgSprite/Svg";

export default function EachTodo({task="todo today",description="description"}) {
  return (
    <div
      className="bg-rose-100  rounded-xl flex flex-row justify-between items-start p-2 shadow

     
     "
    >
      {/* ---task & description--- */}
      <div className="flex flex-col gap-2">
        <span className="p-2 font-bold text-gray-700">{task}</span>
      <span className="p-2  text-gray-700 line-clamp-2">{description}</span>
      </div>
      {/* ---interactive icons---- */}
      <div className="  flex flex-col gap-2 md:gap-3 justify-end  items-end p-2 pr-4">
     
     {/* completed & important  */}
<div className="flex flex-row  gap-3 ">
          {/* completed */}
     <div className="flex flex-row justify-center items-center gap-1">
      <span className="text-cyan-500/50">completed</span>
         <input type="checkbox" className="appearance-none w-4 h-4 border-2 rounded-full border-cyan-500 cursor-pointer checked:bg-cyan-600 checked:border-cyan-600" />
     </div>
     {/* important  */}
        <div className="flex flex-row justify-center items-center gap-1">
      <span className="text-rose-600/40">important</span>
         
     </div>
       
</div>
   {/* edit & delete */}
     <div className="flex flex-row gap-1">
         <Svg svgId="edit" className="text-orange-400 cursor-pointer" />
        <Svg svgId="trash" className="text-rose-400 cursor-pointer" />
     </div>
      </div>
    </div>
  );
}
