import React from "react";
import Svg from "../SvgSprite/Svg";

export default function EachTodo() {
  return (
    <div
      className="bg-rose-100  rounded-xl flex flex-row justify-between p-2 shadow

     
     "
    >
      <span className="p-2 font-bold text-gray-700">todo today</span>
      <div className="flex flex-wrap gap-4 justify-center md:justify-between mt-4 ">
        <Svg svgId="edit" className="text-orange-400 cursor-pointer" />
        <Svg svgId="trash" className="text-rose-600 cursor-pointer" />
      </div>
    </div>
  );
}
