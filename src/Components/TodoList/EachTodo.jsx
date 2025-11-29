import React from "react";
import Svg from "../SvgSprite/Svg";


export default function EachTodo({title,description,isImportant,isCompleted=false}) {
  return (
    <div
      className="bg-blue-100  rounded-xl flex flex-row justify-between items-start p-2 shadow

     
     "
    >
      {/* ---task & description--- */}
      <div className="flex flex-col gap-2">
        <span className="p-2 font-bold text-gray-700">{title}</span>
      <span className="p-2  text-gray-700 line-clamp-2">{description}</span>
      </div>
      {/* ---interactive icons---- */}
      <div className="  flex flex-col gap-2 md:gap-3 justify-end  items-end p-2 pr-4">
     
     {/* completed & important  */}
<div className="flex flex-row  gap-3 ">
          {/* completed */}
    {isCompleted && ( <div className="flex flex-row justify-center items-center gap-1">
      <span className="text-cyan-500/50">completed</span>
         <input type="checkbox" className="appearance-none w-4 h-4 border-2 rounded-full border-cyan-500 cursor-pointer checked:bg-cyan-600 checked:border-cyan-600" />
     </div>)}
     {/* important  */}
        {isImportant && (<div className="flex items-center gap-1">
  <Svg svgId="star" className="text-yellow-500" />
  <span className="text-sm text-rose-600">Important</span>
</div>)}
</div>
   {/* edit & delete */}
     <div className="flex flex-row gap-1">
         <Svg svgId="edit" className="text-orange-600 cursor-pointer" />
        <Svg svgId="trash" className="text-rose-600 cursor-pointer" />
     </div>
      </div>
    </div>
  );
}
