
import React from 'react';
import {Link} from 'react-router-dom'
import { Menu, Icon,Accordion, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import {Navbar,Container,Nav,Button} from 'react-bootstrap'
import {cartItems} from './Product'
import 'bootstrap/dist/css/bootstrap.min.css';

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
  
      return (
<div>
 <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
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
      <Link to="/Products">
                    <Button  variant="outline-primary">Products</Button>
            </Link>
      </Nav.Link>
    
      <Nav.Link href="#">         
      <Link to="/Cart">
            <Button  variant="outline-primary">
                Cart : <label>{this.state.countItems}</label></Button>
            </Link>
      </Nav.Link>  
    </Nav>

  </Navbar.Collapse>
  </Container>
</Navbar>
</div>
)
    }
}               