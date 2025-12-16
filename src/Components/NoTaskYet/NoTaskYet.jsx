import React from 'react'

export default function NoTaskYet({ message }) {
  return (
    <div className='flex justify-center items-center mt-20'>
        <p className='text-gray-500 dark:text-gray-400 italic'>{message}</p>
    </div>
  )
}
