import React from 'react'
import Button from '../TodoList/Button'
import Svg from '../SvgSprite/Svg'

export default function DropDown() {
  return (
 
  <Button className="bg-blue-100 text-gray-600 flex flex-row items-center gap-4 " >
    <span>All Tasks</span>
    <Svg svgId="chevron-down"/>
    </Button> 
   
  )
}
