import React from 'react'

export default function Svg({svgId,className}) {
  return (
    <svg className={`w-6 h-6  ${className}`}>
    <use href={`#${svgId}`}></use>
</svg>
  )
}
