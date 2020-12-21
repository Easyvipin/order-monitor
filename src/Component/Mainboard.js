import React from 'react'
import {Modal,ListGroup ,Button ,Image} from "react-bootstrap";
import add from "../add.png"
import Addorder from './Addorder';
function Mainboard() {
     const [show , setShow] = React.useState(false);
    const handleShow = () => setShow(true);
    function handleClose(){
         setShow(false)
    }
    return (
        <div className="mx-4 text-center">
        <ListGroup>
        <ListGroup.Item className="text-left" variant="info">Primary</ListGroup.Item>
      </ListGroup>
      <Button variant = "light my-2" onClick={()=>handleShow()} >
      <Image src={add} style={{height:"50px"}} fluid thumbnail />
       <span className="mx-1">Add a order</span>
      </Button>
      <Modal show={show} onHide={handleClose} >
      <Addorder handleClose={handleClose}/>
      </Modal>
        </div>
    )
}

export default Mainboard
