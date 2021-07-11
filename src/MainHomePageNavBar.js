
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
<div>
 <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="fixed-top">
  <Container>
  <Navbar.Brand href="#MainStartingApp">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#">         
      <Link to="/">
                <Button  variant="outline-primary">Home</Button>
      </Link>
      </Nav.Link>
      <Nav.Link href="#">  
      <SinInModule buttonTitle="Sin In"/>       
      </Nav.Link>
    
      <Nav.Link href="#">      
      <SinUpModule buttonTitle="Sin Up"/>   
      </Nav.Link>
    

      <Nav.Link href="#">  

      <Link to="/Cart">
            <Button  variant="outline-primary">
                Cart : <label>{this.state.countItems}</label></Button>
            </Link>
      </Nav.Link>

      
            <Button  variant="outline-primary"
            onClick={
              ()=>{
                localStorage.setItem("is_logeIn",false)
              }
            }
            >Log out </Button>
    
    </Nav>

  </Navbar.Collapse>
  </Container>
</Navbar>
</div>
)
    }
}               