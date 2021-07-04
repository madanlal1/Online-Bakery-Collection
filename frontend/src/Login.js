import './SignIn.css';
import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
//import Axios from 'axios';

export default function SignIn() {
    const history = useHistory();
    const [email, setemail] = useState(""); 
    const [password, setPassword] = useState("");
    const [serverResponse,setServerResponse]=useState("")

    const SubmitLogin = ()=> {
      if(email === "" && password==="")
      {
        alert("Fields can't be empty")
        return;
      }
      var data={
        email:email,
        password:password
    }
    console.log("here")
      fetch("http://localhost:3001/login", {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      }).then((res)=>{
        return res.json()
      },(err)=>{
        console.log(err)
      }).then((data)=>{
        if(data.length>0)
        {
          alert("Loged in");
          setServerResponse("Loged in");
          history.push("/");

        }
        else
        {
          setServerResponse("Incorrecet email or password! please try again")
        }
        
      });
      
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
        <input type="text" class="form-control" placeholder="Email" name="email" onChange = {(e)=>{
            setemail(e.target.value);
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
        {serverResponse}
      </div> <br/><br/>
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