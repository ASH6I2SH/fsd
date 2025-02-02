import Link from 'next/link'
import React from 'react'


const Header = (props) => {
  return (
    <nav>
        <h2>logo</h2>
        <div className='navPart2'>
          <Link href="/About"><h4>About</h4></Link>
          <Link href="/Account"><h4>Career</h4></Link>
          <Link href="/Blog"><h4>Blog</h4></Link>
          <Link href="/Career"><h4>Account</h4></Link>
          <h4>{props.user}</h4>
        </div>
    </nav> 
  )
}

export default Header