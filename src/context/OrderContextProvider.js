import React from 'react'

const OrderContext = React.createContext();

function useOrderContext(){
    return React.useContext(OrderContext);
} 


function OrderContextProvider({children}) {
  const [orderList,setOrderList] = useLocaleStorage(all,[])

    function createOrder(productName,orderNo){
      setOrderList({orderNo,productName,del:false})
    }
    return (
        <OrderContext.Provider value={{
            createOrder
        }}>
        </OrderContext.Provider>
    )
}

export default OrderContextProvider
