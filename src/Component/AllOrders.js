import React from "react";
import { Table } from "react-bootstrap";
import { useOrderContext } from "../context/OrderContextProvider";

const AllOrders = () => {
  const { orderList } = useOrderContext();
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>orderID</th>
          <th>PRODUCT</th>
          <th>DELIVERED</th>
          <th>STATUS</th>
        </tr>
      </thead>
      <tbody>
        {orderList.map((order, index) => {
          return (
            <tr key={index}>
              <td>{index}</td>
              <td>{order.orderNo}</td>
              <td>{order.productName}</td>
              <td>{order.del === false ? "No" : "Yes"}</td>
              <td>{order.cancel === false ? "Processing" : "Cancelled"}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default AllOrders;
