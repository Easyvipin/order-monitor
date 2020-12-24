import React from "react";
import { Form, Modal, Button } from "react-bootstrap";
import { useOrderContext } from "../context/OrderContextProvider";
import toast from "react-hot-toast";
const addNotify = () =>
  toast("New Order Added", {
    icon: "🚀",
    style: {
      borderRadius: "10px",
      background: "whitesmoke",
      color: "black",
    },
  });
function Addorder({ handleClose }) {
  const { createOrder } = useOrderContext();
  const productRef = React.useRef();
  const orderRef = React.useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    addNotify();
    createOrder(productRef.current.value, orderRef.current.value);
    handleClose();
  };
  return (
    <>
      <Modal.Header closeButton={handleClose}>
        <Modal.Title>ADD ORDER DETAILS</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit} className="p-2">
        <Form.Group>
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            ref={productRef}
            placeholder=" ex:wooden-Table"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Order-no:</Form.Label>
          <Form.Control type="number" ref={orderRef} placeholder="123124234" />
        </Form.Group>
        <Button variant="primary" type="submit">
          SUMBIT ORDER
        </Button>
      </Form>
    </>
  );
}

export default Addorder;
