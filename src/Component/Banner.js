import React from 'react'
import {Jumbotron , Button, Form} from "react-bootstrap";
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
  <Jumbotron className="bg-primary d-flex flex-wrap justify-content-center">
  <div className="flex-fill px-5 text-center ">
  <h3>LOCAL REMOTE SHOP</h3>
  <h3>..ORDERS DAIRY..</h3>
  <p>
    Manage Your ORDERS HERE :)
  </p>
  </div>
  {shop.name == undefined ? <Form onSubmit={handleSubmit} className="d-flex flex-row flex-wrap bg-warning align-content-center p-4 rounded">
  <Form.Group controlId="formShop" className ="mx-2" >
  <Form.Label>ShopName</Form.Label>
  <Form.Control type="text" ref={shopRef} placeHolder ="ex John store"/>
  </Form.Group>
  <Form.Group controlId="formUser" className ="mx-2" >
  <Form.Label>ShopName</Form.Label>
  <Form.Control type="text" ref={userRef} placeHolder ="ex John doe"/>
  </Form.Group>
  <Button variant="dark" type="submit" className="align-self-center mt-3">
  Submit
</Button>
  </Form> : <h1>{shop.name}</h1>}
</Jumbotron>
    )
}

export default Banner
