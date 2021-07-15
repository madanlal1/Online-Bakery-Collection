import React,{useState} from 'react'
import "./App.css";
import { Button, Form, Container, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function DeleteProduct() {
  const [productId,setProductId]=useState("")
  const[serverResponse,setServerResponse]=useState("")

  function deleteItem()
  {
    var data=
    {
      productId:productId
    }
 
  fetch("http://localhost:3001/deleteItem",{
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
  alert("Product Deleted")
  }
  return (
    <>
      <Container fluid="sm" style={{width: "30rem", border: "2px solid green", borderRadius:"20px", padding:"25px" }}>
        <Form>
        

          <Form.Row>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Product ID</Form.Label>
              <Form.Control type="id" placeholder="Enter ID" 
               onChange={(ev)=>{
                setProductId(ev.target.value)
              }}
              />
            </Form.Group>
          </Form.Row>
          <br />

          <Button variant="outline-success form-control" className="insert"
          onClick={()=>{
            deleteItem();
          }}
          >
            Delete Product
          </Button>
          {serverResponse}
        </Form>
      </Container>
    </>
  );
}
