import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion } from "motion/react"

const Card = ({cardData, reference}) => {
  // reference
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      dragElastic={1}
      dragTransition={{bounceStiffness:100, bounceDamping: 5}}
      className='relative w-35 h-[32vh] rounded-[1.5vw] bg-zinc-900/90 text-white p-3 overflow-hidden ' >
        <FaRegFileAlt/>
        <p className='text-[1vw] mt-4 font-semibold leading-tight'>{cardData.desc}</p>
        <div className='footer absolute bottom-0 left-0  w-full'>
            <div className='flex items-center justify-between px-3 mb-2'>
                <h6 className='text-xs'>{cardData.filesize}</h6>
                <span className='bg-zinc-200  w-4 h-4 rounded-full flex items-center justify-center text-sm text-zinc-800'>{cardData.close ? <IoClose/> : <MdOutlineFileDownload/> }</span>
            </div>
            {cardData.tag.isopen && <div className={` ${ cardData.tag.tagColor ==="blue" ? "bg-blue-600" : "bg-green-600" } w-full h-7 flex items-center justify-center mt-2`}>
            {/* {` ${ cardData.tag.tagColor ==="blue" ? "bg-blue-600" : "bg-green-600" } */}
                <h4 className='text-[1vw] font-semibold'>{cardData.tag.tagTitle}</h4>
            </div>}
        </div>
    </motion.div>
  )
}

export default Card