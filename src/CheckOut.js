import React,{useState} from 'react' 
import { Modal,Button,Form } from 'react-bootstrap';
export default function CheckOut(props) {

    const [show, setShow] = useState(false);
    const [userName,setUserName] = useState("")
    const [password,setPassword] = useState("")
    const [name,setName] = useState("")
    const [address,setAddress] = useState("")
    const [bankAccountNumber,setBankAccountNumber] = useState("")
    const [serverResponse,setServerResponse]=useState("")
    const [status,setStatus]=useState("")

    const handleClose = () => setShow(false);
    const handleShow = () => 
    {
      setShow(true)
      if(localStorage.getItem("is_logeIn")===null)
      {
        setStatus("Please login before you check out")
      }
      else
      {
        setStatus("Check out done successfully")
      }
    }
  
    // function sinUp(event)
    // {
      
    //   console.log(userName+name+password)
    //     //Call //the API to create the account
    //     var data=
    //       {
    //         userName:userName,
    //         name:name,
    //         password:password,
    //         address:address,
    //         bankAccountNumber:bankAccountNumber
    //       }
        
    //     fetch("http://localhost:3001/createAccount",{
    //       method: 'POST',
    //       headers: {
    //       'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify(data)
    //     }
    //     ).then((respo)=>{return respo.json()}).then((data)=>{setServerResponse(data.responseMessage)})
    // }
    return (
      <div>
        <Button variant="primary" onClick={handleShow}>
          {props.buttonTitle}
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Check out</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={{fontSize:"40px"}}>
              {status}
            </div>
             {/* Here you need to add the form which you want for getting input values form user
             <Form>
                     <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" 
                        onChange={(event)=>{
                            setUserName(event.target.value)
                        }}/>
                        
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" 
                         onChange={(event)=>{
                            setName(event.target.value)
                        }}/>
                     </Form.Group>
                     
                     <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Address" 
                         onChange={(event)=>{
                            setAddress(event.target.value)
                        }}/>
                     </Form.Group>

                     <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Bank Account Number</Form.Label>
                        <Form.Control type="text" placeholder="Bank Account Number" 
                         onChange={(event)=>{
                            setBankAccountNumber(event.target.value)
                        }}/>
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
                       
                    </Form>
 */}

          </Modal.Body>
          {/* <Modal.Footer>
            {serverResponse}
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={
              ()=>{
                // sinUp()
              }
            }>
                Create Account
            </Button>

          </Modal.Footer> */}
        </Modal>
        </div>
    );
  }