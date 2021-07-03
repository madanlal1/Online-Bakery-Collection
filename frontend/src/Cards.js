import React from 'react';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

function Cards(props) {
  return (
      
          <div className="container-fluid m-auto d-inline" style={{borderRadius: "20px"}}>
                <Card style={{ width: '18rem', border:"2px solid #5cb85c" }}>
                  <Card.Img variant="top" src={props.image} alt="image..." style={{width:"284px", height: "284px"}} />
                  <Card.Body>
                    <Card.Title style={{textAlign: "center", paddingBottom:"5px"}}>{props.title}</Card.Title>
                    <Button variant="outline-success form-control">Add to Cart</Button>
                  </Card.Body>
                </Card> 
  </div>
      
  );
}


export default Cards;
