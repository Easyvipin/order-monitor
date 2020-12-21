import logo from './logo.svg';
import './App.css';
import Banner from './Component/Banner';
import {Container } from 'react-bootstrap';
import { ShopContextProvdier } from './context/ShopContextProvdier';

function App() {
  return (
   <ShopContextProvdier>
   <Container fluid className="d-flex flex-column ">
   <Banner/>
   </Container>
   </ShopContextProvdier>
  );
}

export default App;
