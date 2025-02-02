"use client"
import Header from '@/Components/Header'
import { MyContext } from '@/Helper/Context'
import React, { useContext } from 'react'

const page = () => {
  const user= useContext(MyContext);
  return (
    <div>
      <Header/>
      <h1>{user}</h1>
    </div>
  )
}

export default page