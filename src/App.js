import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Screen/Home/Home";
import ProductDetail from "./Screen/ProductDetail/ProductDetail";
import CreateProduct from "./Screen/CreateProduct/CreateProduct";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className=" App container mx-auto p-4">
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand>
            <Navbar.Brand href="/">UPayment Store</Navbar.Brand>
            </Navbar.Brand>
            <Nav className="justify-content-end">
              <Nav.Link>Register</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route
            exact
            path="/product-detail/:id"
            element={<ProductDetail />}
          ></Route>
          <Route
            exact
            path="/create-product"
            element={<CreateProduct />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
