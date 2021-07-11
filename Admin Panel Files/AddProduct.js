import "./App.css";
import { Button, Form, Container, Col } from "react-bootstrap";
// import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AddProduct() {
  return (
  <>
    <Container fluid="sm" style={{ width: "30rem" }}>
      <Form>
        <Form.Row>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Product Name</Form.Label>
            <Form.Control type="name" placeholder="Enter Name" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Product ID</Form.Label>
            <Form.Control type="id" placeholder="Enter ID" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Product Price</Form.Label>
            <Form.Control type="price" placeholder="Enter Price" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Product Quantity</Form.Label>
            <Form.Control type="quantity" placeholder="Enter Quantity" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Product Picture Link</Form.Label>
            <Form.Control type="link" placeholder="Enter Picture" />
          </Form.Group>
        </Form.Row>
        <br />

        <Button variant="primary" className="insert">
          Insert Products
        </Button>
      </Form>
    </Container>
  </>
  )
}
