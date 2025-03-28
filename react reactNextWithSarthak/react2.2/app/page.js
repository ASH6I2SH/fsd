"use client"
import Header from '@/Components/Header'
import { MyContext } from '@/Helper/Context';
import React, { useContext, useState } from 'react'

const page = () => {
  const [num, setnum] = useState(10);
  const user= useContext(MyContext)
  return (
    <div className='text-3xl text-center'>
      {user}
      <Header/>
    </div>
  )
}

export default page