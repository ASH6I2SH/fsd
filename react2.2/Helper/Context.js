"use client"
import React, { createContext } from 'react'

export const MyContext= createContext();

const Context = ({children}) => {
  const username = "Ashish is a full stack developer"
  return (
    <div>
      <MyContext.Provider value={username}>
        {children}
      </MyContext.Provider>
    </div>
  )
}

export default Context