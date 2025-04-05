import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { RouteIndex, RouteToAbout, RouteToBlog, RouteToForum, RouteToLogin, RouteToProducts } from '../Helpers/RouteName'
import logo from "../assets/logo.png";

const Layout = () => {
  const activeLink= ()=>{

  }
  return (
    <div className='underRoot'>

        <nav>
            <ul>
                <li className='homeLi'><Link className='noHover' to={RouteIndex}><img src={logo} alt="" /></Link></li>
                <li><Link to={RouteToBlog}>Blog</Link></li>
                <li><Link to={RouteToProducts}>Products</Link></li>
                <li><Link to={RouteToAbout}>About</Link></li>
                <li><Link to={RouteToForum}>Forum</Link></li>
                <li><Link to={RouteToLogin}>Login</Link></li>
            </ul>
        </nav>

        <main>
        <Outlet />
        </main>

        <footer>
          <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FFFFFF"><path d="M400-320h160q17 0 28.5-11.5T600-360v-80h-80v40h-80v-160h80v40h80v-80q0-17-11.5-28.5T560-640H400q-17 0-28.5 11.5T360-600v240q0 17 11.5 28.5T400-320Zm80 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
          Ashish Pandey
        </footer>

    </div>
  )
}

export default Layout