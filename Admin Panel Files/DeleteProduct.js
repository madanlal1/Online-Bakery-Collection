import "./App.css";
import { Button, Form, Container, Col } from "react-bootstrap";
// import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function DeleteProduct() {
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
          <br />

          <Button variant="primary" className="insert">
            Delete Products
          </Button>
        </Form>
      </Container>
    </>
  );
}
