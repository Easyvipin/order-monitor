import React from "react";
import { Badge } from "react-bootstrap";
import { useOrderContext } from "../context/OrderContextProvider";
const Status = () => {
  const { orderList } = useOrderContext();
  const del = orderList.filter((order) => order.del === true);
  const cancel = orderList.filter((order) => order.cancel === true);
  return (
    <div className="d-flex flex-wrap my-2">
      <h4 className="mx-2">
        <Badge variant="secondary">&#x1F6CD;{orderList.length} Orders</Badge>
      </h4>
      <h4 className="mx-2">
        <Badge variant="secondary">&#x1F69A;{del.length} Delivered</Badge>
      </h4>
      <h4 className="mx-2">
        <Badge variant="secondary">&#x274C;{cancel.length} Cancelled</Badge>
      </h4>
    </div>
  );
};

export default Status;
