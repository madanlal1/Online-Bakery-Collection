import './SignIn.css';
import React, {useState, useEffect} from 'react';
import Axios from 'axios';

export default function SignIn() {
    const [email, setemail] = useState(""); 
    const [password, setPassword] = useState("");
    const [serverResponse,setServerResponse]=useState("")
    const SubmitLogin = ()=> {
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
          
          setServerResponse("Loged in")
        }
        else
        {
          setServerResponse("Not Loged in")
        }
        
      });
      // Axios.post("http://localhost:3001/login", 
        // {email: email, password: password}).then(()=>{
        //   alert("Logined");
        // })
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
      </div> <br/>
      <div class="row">
      <a href="SignIn.js">
      <button class="form-control btn btn-outline-success">Create Your Account</button>
      
      </a>
      {serverResponse}
      </div>


</div>
      </div>
    </div>
    </>
); 
}

<div id="ok">aaa</div>