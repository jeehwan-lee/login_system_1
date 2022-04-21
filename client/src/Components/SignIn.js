import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom';
import "../CSS/signIn.css"

function SignIn() {

    const [logusername, setLogusername] = useState("");
    const [logpassword, setLogpassword] = useState("");
    const [confirmpass, setConfirmpass] = useState("");
    const [logemail, setLogemail] = useState("");
    const [registerCheck, setRegisterCheck] = useState(false);
    const [notice, setNotice] = useState("");

    useEffect(() => {
      if(logusername == "") {
          setRegisterCheck(false);
          setNotice("Please Enter Username");
      } else if (logpassword == "") {
          setRegisterCheck(false);
          setNotice("Please Enter Password");
      } else if (confirmpass =="" || confirmpass != logpassword) {
        setRegisterCheck(false);
          setNotice("Please Check the confirm Password");
      } else if (logemail == "") {
          setRegisterCheck(false);
          setNotice("Please Enter your Email");
      } else {
          setNotice("");
          setRegisterCheck(true);
      }  
    });
/*
    const register = () => {

        if(logusername == "") {
            setNotice("Please Enter Username");
        } else if (logpassword == "") {
            setNotice("Please Enter Password");
        } else if (confirmpass =="" || confirmpass != logpassword) {
            setNotice("Please Check the confirm Password");
        } else if (logemail == "") {
            setNotice("Please Enter your Email");
        } else {
            setNotice("");
            setRegisterCheck(true);

            
            Axios.post('http://localhost:3001/register', {
              username : logusername,
              password : logpassword,
              email : logemail,
            }).then(response => {
            console.log(response);
            }); 
        }  


    } */

  return (
    <div className="register">
        <h1>Register</h1>
        <div>
          <input type="text" placeholder="Username..."  onChange={(e) => {setLogusername(e.target.value)}}/>
          <input type="password" placeholder="Password..." onChange={(e) => {setLogpassword(e.target.value)}}/>
          <input type="password" placeholder="confirm password" onChange={(e) => {setConfirmpass(e.target.value)}}/>
          <input type="text" placeholder='email...' onChange={(e) => {setLogemail(e.target.value)}}/>
          {registerCheck ? 
          <Link to = "/signIn_complete" state={{username: logusername, password: logpassword, email:logemail}}><button>Register</button></Link> : <button>Register</button>}
          <p>{notice}</p>
        </div>
      </div>
  )
}

export default SignIn