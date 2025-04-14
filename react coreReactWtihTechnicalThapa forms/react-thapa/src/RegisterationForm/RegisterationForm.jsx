import React, { useState } from "react";

const App = () => {
  const [user, setuser] = useState({
    fname: '',
    lname: '',
    phoneno: '',
    email: '',
    password: '',
  })
                                                     
  const handleInputChange= (e)=>{
    const {name, value}= e.target;
    console.log(e.target)
    setuser((prev)=>({... prev, [name]: value}))
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(user);
  };

  return (

    <div className="main bg-zinc-800 w-full h-full text-white">
      <h2 className="text-center p-16">
        Hi!, my name is {user.fname} {user.lname}, phone no is {user.phoneno}, my email is
        {user.email}, Password is {user.password}
      </h2>

      <div className="w-full flex justify-center">
        <form
          className="border  w-1/4 flex flex-col gap-3 p-5 rounded-xl"
          onSubmit={formSubmitHandler}
        >
          <label htmlFor="fname">first name</label>
          <input
            type="text"
            name="fname"
            value={user.fname}
           onChange={handleInputChange}
          />

          <label htmlFor="lname">last name</label>
          <input
            type="text"
            name="lname"
            value={user.lname}
            onChange={handleInputChange}  
          />

          <label htmlFor="phoneno">Phone Number</label>
          <input
            type="text"
            name="phoneno"
            value={user.phoneno}
            onChange={handleInputChange}
          />

          <label htmlFor="email">email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
          />

          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleInputChange}
          />

          <input className="bg-zinc-400 text-black font-bold" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default App;
