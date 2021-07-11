import react from 'react'
import Slider from './Slider'
import {Row,Col,Card} from 'react-bootstrap'
import Footer from './Footer'
import { Products } from './Products'
export default function Home()
{
    return(
        <div>
            <Slider/>

            <div style={{marginTop:"40px",marginBottom:"150px"}}>
            <div style={{textAlign:"center"}}>
                <h1>Our Catagories</h1>
            </div>
            <Row className="mt-4">
                <Col md={4}>
                <Card style={{textAlign:"center"}}>
                 <Card.Body>
                   
                    <Card.Text>
                       <h2>Catagory one</h2>
                    </Card.Text>
                </Card.Body>
                </Card>  
                
                </Col>
                <Col md={4}>
                <Card style={{textAlign:"center"}}>
                 <Card.Body>
                   
                    <Card.Text>
                       <h2>Catagory Two</h2>
                    </Card.Text>
                </Card.Body>
                </Card>  
                
               
                </Col>
                
                <Col md={4}>
                <Card style={{textAlign:"center"}}>
                 <Card.Body>
                   
                    <Card.Text>
                       <h2>Catagory Three</h2>
                    </Card.Text>
                </Card.Body>
                </Card>  
                
               
                </Col>
                
            </Row>


            </div>
            <div style={{marginBottom:"50px"}}>
            <Products/>
            </div>
       
            <Footer/>
        </div>
    )
}