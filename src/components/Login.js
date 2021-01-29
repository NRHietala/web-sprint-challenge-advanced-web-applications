import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios";

const intialCredentials = {
  username:"",
  password:"",
}

// codegrade test 1

const Login = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [ credentials, setCredentials ] = useState(intialCredentials);

  const history = useHistory();

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name] : e.target.value
    })
  }

  const handleLogin = e => {
    e.preventDefault();

    axios
    .post('http://localhost:5000/api/login', credentials)
    .then(res => {
      console.log(res);
      localStorage.setItem("token", res.data.payload)
      history.push('/protected')
    })
  }


  return (
    <>
      <h2>Sign In!</h2>
        <form className="formGroup" onSubmit={handleLogin}>
          <label className="formLabel">Username:
          <input
          className="formInput"
          type="text"
          name="username"
          placeholder="Enter Username"
          onChange={handleChange}
          value={credentials.username}
          />
          </label>
          <label className="formLabel">Password:
          <input
          className="formInput"
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={handleChange}
          value={credentials.password}
          />
          </label>
          <button>Sign In!</button>
      </form>
    </>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEST "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.