import React, { useContext } from 'react'
import Nav from './Nav'
import { MyContext } from '@/Helper/Context'

const Header = (props) => {

    const user= useContext(MyContext)
  return (
    <div className='bg-slate-400 p-5'>
       {user}
    </div>
  )
}

export default Header