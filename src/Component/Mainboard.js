import React from "react";
import { Modal, ListGroup, Button, Image, Badge } from "react-bootstrap";
import { useOrderContext } from "../context/OrderContextProvider";
import add from "../add.png";
import Addorder from "./Addorder";
import toast from "react-hot-toast";

const cancelNotify = () => toast.success("Cancelled Successfully");
const delNotify = () => toast.success("Order Deliverd");
function Mainboard() {
  const [show, setShow] = React.useState(false);
  const { formattedOrderList, changeStatus } = useOrderContext();
  const handleShow = () => setShow(true);
  function handleClose() {
    setShow(false);
  }
  return (
    <div className="mx-1 text-center">
      <ListGroup variant="flush">
        {formattedOrderList.map((order, index) => {
          return (
            <ListGroup.Item
              className="text-left d-flex flex-wrap align-items-center my-1 "
              variant="primary"
            >
              <div className="flex-grow-1">
                <h3 style={{ display: "inline-block" }}>{order.productName}</h3>
                <Badge className="mx-2 flex-grow-2" variant="secondary">
                  {order.orderNo}
                </Badge>
              </div>
              <div>
                <Button
                  variant="success"
                  className="mx-2"
                  id={index}
                  onClick={() => {
                    changeStatus("del", order.orderNo);
                    delNotify();
                  }}
                >
                  <i className="fas fa-check mx-1"></i>
                  Delivered
                </Button>
                <Button
                  className="mx-2"
                  variant="danger"
                  id={index}
                  onClick={() => {
                    changeStatus("cancel", order.orderNo);
                    cancelNotify();
                  }}
                >
                  <i className="fas fa-times mx-1"></i>
                  Cancel
                </Button>
              </div>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
      <Button variant="primary my-2" onClick={() => handleShow()}>
        <Image
          src={add}
          style={{ height: "50px", background: "none", border: "none" }}
          fluid
          thumbnail
        />
        <span className="mx-1">Add a order</span>
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Addorder handleClose={handleClose} />
      </Modal>
    </div>
  );
}

export default Mainboard;
