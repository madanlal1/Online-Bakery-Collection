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
      console.log(localStorage.getItem("is_logeIn"))
      if(localStorage.getItem("is_logeIn")===null || localStorage.getItem("is_logeIn")==="false")
      {
        setStatus("Please login before you check out")
      }
      else
      {
        setStatus("Check out done successfully")
        
      }
    }
  
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

          </Modal.Body>
        </Modal>
        </div>
    );
  }