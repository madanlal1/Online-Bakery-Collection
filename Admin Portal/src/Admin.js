import { Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React,{useState} from 'react'

import AddProduct from "./AddProduct";
import DeleteProduct from "./DeleteProduct";

export default function Admin() {
  const [buttonOpt,setButtonOpt]=useState()
  return (
    <>
      <Container fluid="sm" style={{ width: "30rem" }}>
        <h1 style={{ textAlign: "center" }}>Admin Dashboard</h1>
        <br />
        <Button variant="primary" className="insert"
        onClick={()=> setButtonOpt(<AddProduct/>)}
        >
          ADD Product
        </Button >

        <div>
          <br />
        </div>

        <Button variant="primary" className="insert" onClick={()=> setButtonOpt(<DeleteProduct/>)}>
          DELETE Product
        </Button>
      </Container>
      <div>
          <br />
        </div>

        {buttonOpt}
    </>
  );
}
