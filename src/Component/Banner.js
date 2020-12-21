import React from 'react'
import {Jumbotron , Button, Form ,Badge} from "react-bootstrap";
import {useShopContext} from "../context/ShopContextProvdier";
function Banner() {
   const {shop,createShop} = useShopContext(); 
   const shopRef = React.useRef();
   const userRef = React.useRef();  
   
   function handleSubmit(e){
     e.preventDefault();
     createShop(shopRef.current.value , userRef.current.value)      
   }

    return (
  <Jumbotron className="bg-primary d-flex flex-wrap align-items-center rounded-0 px-1 py-1">
  <div className="flex-fill px-5 text-center text-white">
  <h1>ORDER DASHBOARD</h1>
  </div>
  {shop.name === undefined ? <Form onSubmit={handleSubmit} className="d-flex flex-row flex-wrap bg-warning align-content-center p-2 rounded">
  <Form.Group controlId="formShop" className ="mx-1" >
  <Form.Label>ShopName</Form.Label>
  <Form.Control type="text" ref={shopRef} placeHolder ="ex John store"/>
  </Form.Group>
  <Form.Group controlId="formUser" className ="mx-1" >
  <Form.Label>ShopName</Form.Label>
  <Form.Control type="text" ref={userRef} placeHolder ="ex John doe"/>
  </Form.Group>
  <Button variant="dark" type="submit" className="align-self-center mt-3">
  Submit
</Button>
  </Form> : 
  <h1>
  <Badge variant="secondary">{shop.name}</Badge>
  </h1>}
</Jumbotron>
    )
}

export default Banner
