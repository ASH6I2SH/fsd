import React from 'react'
import Background from '../Components/Background'
import Foreground from '../Components/Foreground'
const Page = () => {
  return (
    <div className='relative w-full h-screen bg-zinc-800'>
      <Background/>
      <Foreground/>
    </div> 
  )
}

export default Page