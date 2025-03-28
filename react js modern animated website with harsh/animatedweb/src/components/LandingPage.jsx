import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";
const LandingPage = () => {
  return (
    <div className='bg-zinc-900 w-full h-screen pt-1 '>
        <div className='textstructure mt-36 px-14'>
                {["we create", "eye opening", "presentations"].map((elem, idx)=>{
                    return (
                      <div className="masker flex items-center">
                        
                         {idx === 1 && (
                          <div className='w-32 h-20 bg-amber-500 relative top-1.5 rounded'></div>
                         )}
                        <h1 key={idx} className="uppercase text-[7.5vw] leading-[6.5vw] tracking-tighter font-medium">{elem}</h1>
                        
                      </div>
                    )
                })}
        </div>
        <div className='border-t-2 border-zinc-800 mt-24 px-14 flex justify-between py-5 font-light'>
          {["For public and private companies", "from the first pitch to IPO"].map((elem, idx)=>{
            return <p className='tracking-tight leading-none' key={idx}>{elem}</p>
          })}
          <div className="start flex justify-center items-center">
            <div className='border rounded-full uppercase px-4 py-0.5'>start the project</div>
            <div className='border rounded-full p-1.5 ml-2'>
              <FiArrowUpRight/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default LandingPage