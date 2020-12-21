import logo from './logo.svg';
import './App.css';
import Banner from './Component/Banner';
import {Container } from 'react-bootstrap';
import { ShopContextProvdier } from './context/ShopContextProvdier';
import Mainboard from './Component/Mainboard';

function App() {
  return (
   <ShopContextProvdier>
   <Container fluid className="d-flex flex-column px-0">
   <Banner/>
   <Mainboard/>
   </Container>
   </ShopContextProvdier>
  );
}

export default App;
