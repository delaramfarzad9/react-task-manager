import React from "react";
import Svg from "../SvgSprite/Svg";

export default function EachTodo({
  id,
  title,
  description,
  isImportant,
  isCompleted = false,
  onDo,
  onToggleImportant,
  onRemove,
   onEdit,
}) {
  return (
    <div
      className=" grid grid-cols-7 bg-blue-100  rounded-xl  items-start justify-items-center p-2  shadow

     
     "
    >
      {/* ---task & description--- */}
      <div className="col-span-3 gap-2 flex  flex-col justify-self-start text-left  w-full min-w-0 ">
          <span
    className={`p-2 font-bold text-gray-700 ${
      isCompleted ? "line-through decoration-1 text-gray-500" : ""
    }`}
  >
    {title}
  </span>
       
        <span
         className={`p-2 wrap-break-word overflow-hidden text-gray-700 line-clamp-2 ${isCompleted ? "text-gray-400 tracking-tighter italic " : ""}`}>{description}
         </span>
      </div>
      {/* ---interactive icons---- */}

      {/* important toggle star  */}
      <Svg
        svgId="star"
        onClick={() => onToggleImportant(id)}
        className={`cursor-pointer mt-2 ${
          isImportant ? "text-yellow-500" : "text-gray-400"
        }`}
      />

      {/* edit part  */}
      <Svg svgId="edit" onClick={() => onEdit(id)} className="text-orange-600 cursor-pointer mt-2 " />

      {/* completed toggle with only SVG */}
      {/* completed toggle */}
      {isCompleted ? (
        <Svg
          svgId="check"
          onClick={() => onDo(id)}
          
          className="cursor-pointer text-cyan-600 mt-2"
        />
      ) : (
        <Svg
          svgId="check"
          onClick={() => onDo(id)}
          className="cursor-pointer text-gray-400 mt-2"
        />
      )}

      {/* delete part  */}
      <Svg svgId="trash" onClick={()=> onRemove(id)} className="text-rose-600 cursor-pointer mt-2" />
    </div>
  );
}
