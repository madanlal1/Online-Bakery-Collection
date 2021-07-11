import { cartItems } from "./Product";
import { Card, Button, Icon,Image } from "semantic-ui-react";
import React, { useState } from "react"
import {Row,Col} from 'react-bootstrap'
import CheckOut from "./CheckOut";
export class Cart extends React.Component {

    constructor(props) {
    super(props);
    this.state = { items: cartItems, totalBill:0};
    this.removeFromCartHandler = this.removeFromCartHandler.bind(this);
  }

  componentDidMount(){
    console.log(cartItems)
    let prices=cartItems.map((itm)=>{
        
        return parseFloat(itm.productPrice)
    })

    let bill=0
    if(prices.length>0){
        bill=prices.reduce((prev,current)=>{
            return prev+current
        })
        bill=Math.round(bill)    
    }
    this.setState({totalBill:bill})
    }

  removeFromCartHandler(itm) {
    
    /**Remove item */
    let removeIndex = 0;

    this.state.items.forEach((element, index) => {
      if (element == itm) {
        removeIndex = index;
      }
    });
    cartItems.splice(removeIndex, 1);

        /** Calculate bill after item is removed */
        let prices=cartItems.map((itm)=>{
        
            return parseFloat(itm.productPrice)
        })
        let bill=0
        if(prices.length>0){
            bill=prices.reduce((prev,current)=>{
                return prev+current
            })
            bill=Math.round(bill)
            this.setState({totalBill:bill})
        }
         this.setState({ items: cartItems, totalBill:bill });
  }

  render() {
    return (
      <div style={{ marginLeft: "50px", marginRight: "20px" }}>
        
        <div class="ui four column grid">
       
            <div class="row">
                {/* When cart is empty, execute conditional rendering */}
            {this.state.items.length == 0 ? (
              <div style={{ width:"20%", margin:"auto", marginTop:"20px"}}>
                <h1>Cart is Empty</h1>
              </div>
            ) :  (
                <div style={{marginTop:"100px",textAlign:"right"}}>
                  <Row>
                    <Col md={6}>
                       <h1>Total Bill is: ${this.state.totalBill}</h1>
                    </Col>
                    <Col md={6} >
                        <CheckOut buttonTitle="Check out"></CheckOut>
                    </Col>
                  </Row>
                  
                </div>
              )}

            </div>
          <div class="row">
            
            {this.state.items.map((itm) => {
              return (
                  
                <div
                  key={"_" + itm.productId}
                  class="column"
                  style={{ marginTop: "30px" }}
                >
                  <Card color="blue">
                    <Card.Content>
                    <Card.Header>
                     <Col md={12}>
                     <center>{itm.productName}</center>
                     </Col>
                     
                    <Image src={itm.productImage} style={{height:"284px",width:"19rem"}}/>
                      
                    
                    </Card.Header>

                    <br/>
                    <div className="ui two buttons">
                        <Button
                          basic
                          color="blue"
                          onClick={() => {
                            this.removeFromCartHandler(itm);
                          }}
                        >
                          <h5>Remove</h5>
                        </Button>
                      </div>


                      <hr />
                      <Card.Description>
                        Price: <strong>{itm.productPrice}</strong>
                      </Card.Description>
                    </Card.Content>
                    
                  </Card>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    );
  }
}
