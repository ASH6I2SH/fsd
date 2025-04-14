"use client"
import axios from "axios";
import { useEffect, useState } from "react";


const page = ({params}) => {

  const [paramsObj, setparamsObj] = useState({})
  const [address, setaddress] = useState({})
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
      if(!id) return;
      const response= await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
      const userData= response.data;
      setuser(userData);
      setaddress(userData.address);
      console.log(response);
  }

  useEffect(() => {
    // if(!id) return;
    getUser();
  },[paramsObj] )

  return (
    <div className="mainUser">
      <div className="detail">
        <div className="key"><h4>id</h4> </div> <div className="value">{user.id}</div>
      </div>
      <div className="detail">
        <div className="key"><h4>name</h4> </div> <div className="value">{user.name}</div>
      </div>
      <div className="detail">
        <div className="key"><h4>username</h4> </div> <div className="value">{user.username}</div>
      </div>
      <div className="detail">
        <div className="key"><h4>email</h4> </div> <div className="value">{user.email}</div>
      </div>
      <div className="detail">
        <div className="key"><h4>phone</h4> </div> <div className="value">{user.phone}</div>
      </div>
      <div className="detail">
        <div className="key"><h4>address</h4> </div> <div className="value">{address.city}</div>
      </div>
      <div className="detail">
        <div className="key"><h4>website</h4> </div> <div className="value">{user.website}</div>
      </div>
    </div>
  )
}

export default page