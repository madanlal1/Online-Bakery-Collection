import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import { Menu, Icon,Accordion, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import {Navbar,Container,Nav,Button} from 'react-bootstrap'
import {cartItems} from './Product'
import 'bootstrap/dist/css/bootstrap.min.css';
import SinInModule from './SinInModule'
import SinUpModule from './SinUpModule'

export class MainHomePageNavBar extends React.Component 
{

    constructor(props){
        super(props)
        this.state={countItems:0}
    }

    componentDidMount(){

        setInterval(()=>{
            this.setState({countItems:cartItems.length})
        },1)
    }

    state = { activeItem: 'home' }
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
      
      if(localStorage.getItem("is_logeIn")===null)
      {
        console.log(localStorage.getItem("is_logeIn"))
        
      }
      else
      {

      }
return (
<div className="row">
 <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="fixed-top">

 <div className="py-2 px-4 col-xl-3 col-lg-3 col-sm-6 col-xs-12 hvr">
    <a href="index.html" style={{textDecoration: "none", color: "white", fontSize:'22px'}}>
        <img src="images/logo.png" alt="logo" width="45px" style={{marginTop: "-7px"}} />
        &nbsp;
        Bakery Collection
    </a>
    </div>



  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">

    <div className="col-xl-4 col-lg-3 col-sm-6 col-xs-12">
      <Nav.Link href="#">         
      <Link to="/">
      <Button variant="success form-control" style={{fontWeight:'bold'}} > &nbsp; <img src="https://img.icons8.com/material-outlined/24/ffffff/home--v2.png"/> Home</Button>
      </Link>
      </Nav.Link>
      </div>


      <div className="col-xl-4 col-lg-3 col-sm-6 col-xs-12">
      <Nav.Link href="#">  
      <Link to="/Cart">
            <Button style={{fontWeight:'bold'}}  variant="success form-control">
            <img src="https://img.icons8.com/material-outlined/24/ffffff/fast-cart.png"/>
            &nbsp;
                Cart : <label>{this.state.countItems}</label></Button>
            </Link>
      </Nav.Link>
      </div>
      
      <div className="offset-1 col-xl-3 col-lg-3 col-sm-6 col-xs-12">

      </div>
      


      <div className="col-xl-3 col-lg-3 col-sm-6 col-xs-12">
      <Nav.Link href="#">  
      <SinInModule buttonTitle="Sign In" />       
      </Nav.Link>
      </div>

      <div className="col-xl-3 col-lg-3 col-sm-6 col-xs-12"> 
      <Nav.Link href="#">      
      <SinUpModule buttonTitle="Sign Up"/>   
      </Nav.Link>
      </div>

      <div className="py-2 col-xl-3 col-lg-3 col-sm-6 col-xs-12">
      <Button  variant="outline-success form-control" onClick={ ()=>{ localStorage.setItem("is_logeIn",false) } }>
      <img src="https://img.icons8.com/ios-glyphs/22/ffffff/logout-rounded-up--v1.png"/>
      &nbsp;
      Log out 
      </Button>
      </div>
    
    </Nav>

  </Navbar.Collapse>
</Navbar>
</div>
)
    }
}               