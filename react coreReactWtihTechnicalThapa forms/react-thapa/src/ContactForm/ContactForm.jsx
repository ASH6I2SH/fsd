import React, { useState } from 'react'

const ContactForm = () => {
    const [user, setuser] = useState({
        username: '',
        password: '',
        message: '',
    })
    
    const inputChangeHandler= (e)=>{
        const {name, value}= e.target;
      setuser((prev)=>({... prev, [name]:value}))
      console.log(e.target)
    }
    
const submitFormHandler= (e)=>{
    e.preventDefault();

    console.log(user);

}
   

  return (
    <div className="main">
        <div className="card flex flex-col justify-center items-center absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] p-10 w-96 border rounded-xl gap-2 ">
            <h1>Contact Form</h1>
            <form className='gap-3 w-full' onSubmit={submitFormHandler}>
                <label htmlFor="username">username</label>
                <input type="text" name='username' value={user.username} onChange={inputChangeHandler} />
                <label htmlFor="password">password</label>
                <input type="text" name='password' value={user.password} onChange={inputChangeHandler} />
                <label htmlFor="message">message</label>
                <textarea className='border rounded' name="message" value={user.message} onChange={inputChangeHandler} required autoComplete='on'  ></textarea>
                <input type="submit" value="send messages" />
            </form>
        </div>
    </div>
  )
}

export default ContactForm







