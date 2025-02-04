import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './Home/Home'
import Login from './Login/Login'
import Register from './Register/Register'
import CreatePost from './CreatePost/CreatePost'
import PostDetails from './PostDetails/PostDetails'
import EditPost from './EditPost/EditPost'
import MyBlogs from './MyBlogs/MyBlogs'
import Profile from './Profile/Profile'

const Page = () => {
  return (
    <div className='text-white w-full h-full bg-zinc-800'>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/register' element={<Register/>}/>
        <Route exact path='/write' element={<CreatePost/>}/>
        <Route exact path='/Post/post/:id' element={<PostDetails/>}/>
        <Route exact path='/edit/:id' element={<EditPost/>}/>
        <Route exact path='/myblogs/:id' element={<MyBlogs/>}/>
        <Route exact path='/profile/:id' element={<Profile/>}/>
      </Routes>
    </div>
  )
}

export default Page 