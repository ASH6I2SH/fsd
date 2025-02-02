import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {

  const ref= useRef(null);
  
  const data = [ 
    { 
      desc: "This is the desc data of card", 
      filesize: "0.9mb", 
      close: true, 
      tag: { isopen: true, tagTitle: "Download Now", tagColor: "green"}, 
    }, 
    { 
      desc: "This is the desc data of card", 
      filesize: "0.9mb", 
      close: false, 
      tag: { isopen: true, tagTitle: "Download Now", tagColor: "blue"}, 
    }, 
    { 
      desc: "This is the desc data of card", 
      filesize: "0.9mb", 
      close: false, 
      tag: { isopen: false, tagTitle: "Download Now", tagColor: "green"}, 
    }, 
 
  ];

  return (
 
        <div ref={ref} className='fixed flex gap-3 p-5 z-[3] w-full h-full flex-wrap'>
             {/* ref={ref} */}
          {data.map((elem, i)=>(
            <Card key={i} cardData={elem} reference={ref}/>
          ))}

        </div>
    
  )
}

export default Foreground