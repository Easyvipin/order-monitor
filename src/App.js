import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { OrderContextProvider } from "./context/OrderContextProvider";
import Header from "./Component/Header";
import Mainboard from "./Component/Mainboard";
import AllOrders from "./Component/AllOrders";
import Footer from "./Component/Footer";
import { Toaster } from "react-hot-toast";
import Status from "./Component/Status";

function App() {
  return (
    <Router>
      <OrderContextProvider>
        <Container
          fluid
          className="d-flex flex-column px-4"
          style={{
            height: "90vh",
          }}
        >
          <Status />
          <Header />
          <Route path="/" component={Mainboard} exact />
          <Route path="/all" component={AllOrders} />
          <Toaster position="top-right" reverseOrder={false} />
        </Container>
        <Footer />
      </OrderContextProvider>
    </Router>
  );
}

export default App;
