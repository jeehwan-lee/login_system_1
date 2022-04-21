import { useState } from 'react';
import './App.css';
import Login from './Components/Login';
import Main from './Components/Main';
import { LoginContext } from './Contexts/LoginContext';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignIn from './Components/SignIn';
import SignInComplete from './Components/SignInComplete';

function App() {

  const [username, setUsername] = useState("");

  return (
    <div className="App">
      <LoginContext.Provider value={{username, setUsername}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={username ? <Main/> : <Login/>}/>
            <Route path="/signIn" element={<SignIn/>}/>
            <Route path="/signIn_complete" element={<SignInComplete/>}/>
          </Routes>
        </BrowserRouter>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
