"use client"
import React from 'react'
import { toast, ToastContainer } from 'react-toastify'


const page = () => {
  const notify=()=>{
    toast.error('Login successful', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
     
      });
  }
  return (
    <div className='homePage p-12 '>
      <button onClick={notify} className='border rounded p-2 bg-green-600 font-bold'>Login</button>
      <ToastContainer/>
    </div>
  )
}

export default page