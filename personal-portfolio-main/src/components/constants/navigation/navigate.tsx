import React from 'react'
import Navbar from './navbar'
import Responsivenav from './responsivenav'

export default function Navigate() {
  return (
    <div className='w-full'>
      <Responsivenav/>
      <Navbar/>
    </div>
  )
}
