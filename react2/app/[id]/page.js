// "use client"
// import { useEffect, useState } from "react";

const page =async ({params}) => {

    const paramsObj= await params;
    const {id} = paramsObj;
    console.log(id);
  
  return (
    <div>page{id}</div>
  )
}

export default page