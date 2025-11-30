import React from 'react'

export default function Svg({svgId,className,onClick}) {
  return (
    <svg onClick={onClick} className={`w-6 h-6  ${className}`}>
    <use href={`#${svgId}`}></use>
</svg>
  )
}
