import './SignIn.css';
import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

export default function SignIn() {
  
    const history = useHistory();
    const [fname, setFname] = useState(""); 
    const [lname, setLname] = useState("");
    const [email, setemail] = useState(""); 
    const [password, setPassword] = useState("");
    const [serverResponse,setServerResponse]=useState("")

    const SubmitSignUP = ()=> {
      if(email === "" && password==="" && fname ==="" && lname==="")
      {
        alert("Field(s) can't be empty")
        return;
      }
      alert("Values are: " + fname + lname + email + password )
      var data={
        fname: fname,
        lname: lname,
        email:email,
        password:password
    }
    console.log("here")
      fetch("http://localhost:3001/register", {
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
        if(data)
        {
          alert("Registered Successfully");
          setServerResponse("Registered Successfully");
          history.push("/Login");

        }
        else
        {
          setServerResponse("Something went wrong! please try again")
        }
        
      });
      
    }

  return (
    <>
    <div class="row">
      <div class="col">
      <div class="form">

      <div class="row">
      <h1>SignUp</h1>
      </div>

      <div class="row">
      <h2>Sign Up for Free</h2>
      <div class="row">
        <br/>
      </div>
      </div>
      <div class="row">
        <div class="col">
          <input type="text" class="form-control" placeholder="First Name"  onChange = {(e)=>{
            setFname(e.target.value);
        }}/>
        </div>
        <div class="col">
          <input type="text" class="form-control" placeholder="Last Name" onChange = {(e)=>{
            setLname(e.target.value);
        }}/>
        </div>
      </div>
      <div class="row">
        <br/>
      </div>
      <div class="row">
        <input type="text" class="form-control" placeholder="Email"  onChange = {(e)=>{
            setemail(e.target.value);
        }}/>
      </div> 
      <div class="row">
        <br/>
      </div>
      <div class="row">
        <input type="password" class="form-control" placeholder="Password"  onChange = {(e)=>{
            setPassword(e.target.value);
        }}/>
      </div> 
      <div class="row">
        <br/>
      </div>
      <div class="row">
        <button class="form-control btn btn-outline-success" onClick={SubmitSignUP}>GET STARTED</button> 
      </div> 


      </div>

      </div>
      
    </div>
    </>
); 
}

<div id="ok">aaaa</div>