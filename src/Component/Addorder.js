import React from 'react'
import { Form, Modal ,Button } from 'react-bootstrap'

function Addorder({handleClose}) {
    return (
      <>
       <Modal.Header closeButton={handleClose}>
       <Modal.Title>ADD ORDER DETAILS</Modal.Title>
       </Modal.Header>
       <Form className="p-2">
       <Form.Group>
       <Form.Label>Product Name</Form.Label>
       <Form.Control type="text" placeholder=" ex:wooden-Table"/>
       </Form.Group>
       <Form.Group>
       <Form.Label>Order-no:</Form.Label>
       <Form.Control type="number" placeholder="123124234"/>
       </Form.Group>
       <Button variant="primary">
       SUMBIT ORDER
       </Button>
       </Form>
       </>
    )
}

export default Addorder
