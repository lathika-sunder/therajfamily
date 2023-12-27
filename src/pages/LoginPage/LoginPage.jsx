import React, { useState } from "react";
import HeaderComp from "../../components/HeaderComp/HeaderComp";
import "./LoginPage.css";
import TextField from "@mui/material/TextField";
import {Button} from '@mui/material'
const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <React.Fragment>
      <HeaderComp />
      <div className="login-comp">
        
        <div className="login-container">
        <div className="login-header">
            <h1>Login</h1>
        </div>
          <TextField variant="standard" label="Username" value={username} style={{marginTop:'3vh'}}/>
          <TextField variant="standard" label="Password" value={password}  style={{marginTop:'3vh'}}/>
          <div className="submit-btn">
            <Button variant="contained">submit</Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LoginPage;
