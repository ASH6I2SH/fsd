import React, { useState } from "react";

const LoginForm = () => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('')

  const formSubmitHandler = (e) => {
    e.preventDefault();
    // const LoginData= {
    //   username: username,
    //   password: password,
    // }
    const LoginData= {
      username,
      password,
    }
    console.log(LoginData);
  };
 
  return (
    <div className="main">
      <div className="card">
        <h1>Sign IN</h1>
        <form onSubmit={formSubmitHandler}>
          <label htmlFor="username">username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e)=>setusername(e.target.value)}
          />
          <label htmlFor="password">password</label>
          <input
            type="text"
            name="password"
            value={password}
            onChange={(e)=>setpassword(e.target.value)}
          />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

