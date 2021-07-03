import './SignIn.css';
import React, {useState, useEffect} from 'react';
import Axios from 'axios';

export default function SignIn() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const SubmitLogin = ()=> {
        Axios.post("http://localhost:3001/api/insert", 
        {user: user, password: password}).then(()=>{
          alert("Logined");
        })
    }
  return (
    <>
    <div class="row">
      
      <div class="col">
      <div class="form">

      <div class="row">
      <h1>LogIn</h1>
      </div>

      <div class="row">
      <h2>Welcome Back!</h2>
      <div class="row">
        <br/>
      </div>
      </div>
      
      <div class="row">
        <input type="text" class="form-control" placeholder="Email" name="user" onChange = {(e)=>{
            setUser(e.target.value);
        }}/>
      </div> 
      <div class="row">

        <br/>
      </div>
      <div class="row">
        <input type="password" class="form-control" placeholder="Password" name="password" onChange = {(e)=>{
            setPassword(e.target.value);
        }}/>
      </div> 
      <div class="row">
        <a href="#">Forget Password?</a>
      </div>
      <div class="row">
        <br/>
      </div>
      <div class="row">
        <button class="form-control btn btn-outline-success" onClick={SubmitLogin}>LOG IN</button> 
      </div> <br/>
      <div class="row">
      <a href="SignIn.js">
      <button class="form-control btn btn-outline-success">Create Your Account</button> 
      </a>
      </div>


</div>
      </div>
    </div>
    </>
); 
}

<div id="ok">aaa</div>