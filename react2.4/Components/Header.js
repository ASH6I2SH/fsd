import React, { useContext } from 'react'
import Nav from './Nav'
import { MyContext } from '@/Helper/Context'

const Header = (props) => { 
  const user= useContext(MyContext);
  return (
    <div className='header bg-green-300 p-6'>
      <h1>header{user}</h1>
        <Nav num={props.num}/>
    </div>
  )
}

export default Header