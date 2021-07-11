import React,{useState} from 'react' 
import { Modal,Button,Form } from 'react-bootstrap';
export default function SinInModule(props) {

    // Following are the fields which will hold the values of user input fields
    const [userName,setUserName] = useState("")
    const [password,setPassword] = useState("")


    const [show, setShow] = useState(false);
    const [serverResponse,setServerResponse]=useState("")

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    function sinIn(event)
    {
        //Here we will call the api
        var data=
        {
          userName:userName,
          password:password
        }
        fetch("http://localhost:3001/loginToAccount",{
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          }
          ).then((respo)=>{return respo.json()}).then((data)=>{
            console.log(data)
            console.log(typeof data.responseCode)
            if(data.responseCode===1)
            {
                setServerResponse("Login Sccuess full")
                localStorage.setItem("is_logeIn",true)
            }
            else if(data.responseCode===2)
            {
                localStorage.setItem("is_logeIn",false)
                setServerResponse("Cant find user with these creadentials")
            }
           


        }
            )
    }

    return (
      <>
        <Button variant="success" onClick={handleShow}>
        <img src="https://img.icons8.com/ios-glyphs/20/ffffff/login-rounded-down.png"/>
        &nbsp;
          {props.buttonTitle}
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Sign in to your account</Modal.Title>
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
                        
                    </Form>

          </Modal.Body>
          <Modal.Footer>
              {serverResponse}
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" 
             onClick={()=>{
                sinIn()
            }}>
              
                Sign In
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }