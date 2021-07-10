import React,{useState} from 'react' 
import { Modal,Button,Form } from 'react-bootstrap';
export default function SinInModule(props) {

    // Following are the fields which will hold the values of user input fields
    const [userName,setUserName] = useState("")
    const [password,setPassword] = useState("")


    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    function sinIn(event)
    {
        //Here we will call the api

    }

    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          {props.buttonTitle}
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Sin in to your account</Modal.Title>
          </Modal.Header>
          <Modal.Body>
             {/* Here you need to add the form which you want for getting input values form user */}
             <Form>
                     <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" 
                        onChange={(event)=>{
                            setUserName(event.target.value)
                        }}/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" 
                         onChange={(event)=>{
                            setPassword(event.target.value)
                        }}/>
                     </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    
                    </Form.Group>
                        <Button variant="primary" type="submit" 
                        onClick={()=>{
                            sinIn()
                        }}
                        >
                            Submit
                        </Button>
                    </Form>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Sin In
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }