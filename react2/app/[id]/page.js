"use client"
import axios from "axios";
import { useEffect, useState } from "react";


const page = ({params}) => {
  const [paramsObj, setparamsObj] = useState({})
  const [user, setuser] = useState({})
  
    const awaitParams = async ()=>{
    const awaitedParams = await params;
    setparamsObj(awaitedParams);
  }
  useEffect(() => {
    awaitParams();
  }, [])

  const {id}= paramsObj;
  console.log(id);
  

  const getUser=async ()=>{
    
      const response= await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
      const userData= response.data;
      setuser(userData);
      console.log(response);

  }

  

  useEffect(() => {
    if(!id) return;
    getUser();
  },[paramsObj] )
  
  
  return (
    <div>{JSON.stringify(user)}</div>
  )
}

export default page