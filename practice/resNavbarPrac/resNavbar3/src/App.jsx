import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'
import { RouteIndex, RouteToAbout, RouteToBlog, RouteToForum, RouteToLogin, RouteToProducts } from './Helpers/RouteName'
import Index from './pages/Index'
import Blog from './pages/Blog'
import Products from './pages/Products'
import About from './pages/About'
import Forum from './pages/Forum'
import Login from './pages/Login'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
       <Route path={RouteIndex} element={<Layout/>}>
           <Route index element={<Index/>} />
           <Route path={RouteToBlog} element={<Blog/>} />
           <Route path={RouteToProducts} element={<Products/>} />
           <Route path={RouteToAbout} element={<About/>} />
           <Route path={RouteToForum} element={<Forum/>} />
           <Route path={RouteToLogin} element={<Login/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App