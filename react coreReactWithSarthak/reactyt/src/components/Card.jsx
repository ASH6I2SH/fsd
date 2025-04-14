import React from 'react'

const Card = ({name, city, age, profession, profile_photo,}) => {
  return (
    <div className='bg-white text-black rounded p-2 text-center mt-5'>
        <img className='w-24 h-24 rounded-full bg-orange ml-4' src={profile_photo} alt="" />
        <h1>{name}</h1>
        <h2>{city}, {age}</h2>
        <h2>{profession}</h2>
        <button className='bg-blue-500 rounded border p-1 mt-2'>Add Friend</button>
    </div>
  )
}

export default Card

