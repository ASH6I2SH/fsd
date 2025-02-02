"use client"
import Header from '@/Components/Header'
import axios from 'axios'
import React, { useEffect, useState } from 'react'


const page = () => {

 const [images, setimages] = useState([])

 useEffect(() => {
  getImages();
 }, [])
 

 const getImages= async ()=>{
   const response= await axios.get("https://picsum.photos/v2/list")
   const ArrayOfImageObject= response.data;
   setimages(ArrayOfImageObject);
 }

  return (
    <div className='main'>
      <Header/>
      <button onClick={getImages}>get images</button>
      <div className='cardHolder'>
        {images.map((elem, i)=>{
           return <div key={i} className='card'>
                    <img src={elem.download_url}/>
                  </div>
       })}
      </div>
    </div>
  )
}
export default page