import React from 'react'
import Navbar from './components/Navbar'
import Landingpage from './components/Landingpage'
const App = () => {
  return (
    <div className='w-full h-screen bg-zinc-950 text-white'>
      <Navbar/>
      <Landingpage/>
    </div>
  )
}

export default App