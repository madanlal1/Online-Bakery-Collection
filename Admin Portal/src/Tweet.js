import react from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap'
function Tweet(props)
{
    return(
        <div className="container" style={{marginTop:"20px"}}>
        <Card>
        <Card.Header>
            <Card.Title >

            <h3 style={{display:"inline-block"}}>{props.name}  </h3>    
            <h5 style={{display:"inline-block"}}>@{props.userName}{props.date}</h5>
            
            
                 
            </Card.Title>
        </Card.Header>
        <Card.Body>
               
                <Card.Text>
                  <h4>{props.message}</h4> 
                </Card.Text>
        </Card.Body>
        </Card>
        </div>
    )
}
export default Tweet