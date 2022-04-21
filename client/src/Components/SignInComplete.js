import React from 'react'
import Axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import "../CSS/signInComplete.css"

function SignInComplete() {

  const data = useLocation().state;

  Axios.post('http://localhost:3001/register', {

    username : data.username,
    password : data.password,
    email : data.email,
    }).then(response => {
      console.log(response);
    }); 

  return (
    <div className="complete">
      <h1>Complete</h1>
      <Link to="/">
          <button>Login</button>
      </Link>
      <p>Please Login to Enjoy the service</p>

    </div>
    
  )
}

export default SignInComplete