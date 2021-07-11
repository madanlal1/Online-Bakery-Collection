import React,{useState} from "react";
import "./App.css";
import { Button, Form, Container, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AddProduct() {
  
  const[productName,setProductName]=useState("")
  const[productPrice,setProductPrice]=useState("")
  const[productQuantity,setProductQuantity]=useState("")
  const[productPicture,setProductPitures]=useState("")
  const[serverResponse,setServerResponse]=useState("")

  function insertIntoDataBase()
  {
    var data=
          {
            productImage:productPicture,
            productPrice:productPrice,
            productQuantity:productQuantity,
            productName:productName
          }
        
        fetch("http://localhost:3001/insertProduct",{
          method: 'POST',
          headers: {
          'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }
        ).then((respo)=>{return respo.json()}).then((data)=>{
          setServerResponse(data.responseMessage)
          console.log(data)
        }
        )
        alert("Product Added")
  }

  return (
  <>
    <Container style={{ width: "30rem", border: "2px solid green", borderRadius:"20px", padding:"25px" }}>
      <Form>
        <Form.Row >
          <Form.Group   controlId="formGroupEmail">
            <Form.Label >Product Name</Form.Label>
            <Form.Control type="name" placeholder="Enter Name" 
            onChange={(ev)=>{
              setProductName(ev.target.value)
            }}
            />
          </Form.Group>
        </Form.Row>
       

        <Form.Row>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Product Price</Form.Label>
            <Form.Control type="price" placeholder="Enter Price"  onChange={(ev)=>{
              setProductPrice(ev.target.value)
            }} />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Product Quantity</Form.Label>
            <Form.Control type="quantity" placeholder="Enter Quantity"
             onChange={(ev)=>{
              setProductQuantity(ev.target.value)
            }} />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Product Picture Link</Form.Label>
            <Form.Control type="link" placeholder="Enter Picture" 
             onChange={(ev)=>{
              setProductPitures(ev.target.value)
            }}/>
          </Form.Group>
        </Form.Row>
        <br />

        <Button variant="outline-success form-control" className="insert" 
        onClick={()=>{
          insertIntoDataBase();
        }}
        >
          Insert Products
        </Button>
        {serverResponse}
      </Form>
    </Container>
    <br/>
    <br/>
  </>
  )
}
