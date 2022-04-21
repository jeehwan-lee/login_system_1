import React, { useContext, useState } from 'react'
import { LoginContext } from '../Contexts/LoginContext'
import Axios from 'axios';
import { Link } from 'react-router-dom';
import "../CSS/login.css";

function Login() {

    const {setUsername} = useContext(LoginContext);

    const [logusername, setLogusername] = useState("");
    const [logpassword, setLogpassword] = useState("");
    const [notice, setNotice] = useState("");

    const login = () => {

        if(logusername == "") {
            setNotice("Please Enter Username");
        } else if (logpassword == "") {
            setNotice("Please Enter Password");
        } else {
            setNotice("");

            Axios.post('http://localhost:3001/login', {
                username : logusername,
                password : logpassword,
            }).then(response => {
                console.log(response.data.message);

                if(response.data.message) {
                    setNotice(response.data.message);
                } else {
                    setUsername(logusername);
                }
            });
        }  
    }

  return (
    <div className="login">
        <h1>Login</h1>
        <div>
            <input type="text" className='inputField' placeholder="Username..."  onChange={(e) => {setLogusername(e.target.value)}}/>
            <input type="password" className='inputField' placeholder="Password..." onChange={(e) => {setLogpassword(e.target.value)}}/>
            <button onClick={login}>Login</button>
                <a><Link to="/signIn">Create a New Accout ?</Link></a>
            <p>{notice}</p>
        </div>
        
    </div>
  )
}

export default Login