"use client"

import axios from "axios"

import { useEffect, useState } from "react"


const page = () => {

  const [users, setusers] = useState([])

  const getUsers= async ()=>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    const usersdata=  response.data;
    setusers(usersdata)
    console.log(response);
  }
  useEffect(() => {
    getUsers();
  }, [])
  
  
  return (
    <div className='main'>
      <button onClick={getUsers}>get data</button>
      <div className='dataContainer'>
        {
          users.map((user, i)=>{
            return <li key={i}>{user.username} ---   <a href={`/${user.id}`}>explore</a></li>
          })
        }
      </div>
    </div>
  )
}

export default page
