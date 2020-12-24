import React from "react";
import useLocaleStorage from "../hooks/useLocaleStorage";
const OrderContext = React.createContext();

export function useOrderContext() {
  return React.useContext(OrderContext);
}

export function OrderContextProvider({ children }) {
  const [orderList, setOrderList] = useLocaleStorage("all", []);

  function createOrder(productName, orderNo) {
    setOrderList((prevOrderList) => {
      return [
        ...prevOrderList,
        { orderNo, productName, del: false, cancel: false },
      ];
    });
  }
  function changeStatus(status, id) {
    if (status == "del") {
      alterDelStatus(id);
    }
    if (status == "cancel") {
      cancelOrder(id);
    }
  }

  function alterDelStatus(id) {
    const newOrder = orderList.map((order) => {
      if (order.orderNo === id) {
        order.del = true;
      }
      return order;
    });

    setOrderList(() => {
      return [...newOrder];
    });
  }
  function cancelOrder(id) {
    const newOrder = orderList.map((order) => {
      if (order.orderNo === id) {
        order.cancel = true;
      }
      return order;
    });

    setOrderList(() => {
      return [...newOrder];
    });
  }

  const formattedOrderList = orderList.filter(
    (order) => order.del == false && order.cancel == false
  );
  console.log(formattedOrderList);
  return (
    <OrderContext.Provider
      value={{
        formattedOrderList,
        orderList,
        createOrder,
        changeStatus,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
