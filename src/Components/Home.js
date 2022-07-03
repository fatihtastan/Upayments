import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/Action/ProductAction";
import {
  Row,
  Col,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import ProductCart from "./ProductCart";
import { getCategories } from "../Redux/Action/CategoriesAction";
import './home.css';
const Home = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const products = useSelector((state) => state.cart?.products?.productList);

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategories())
    
  }, []);

  return (
    <div className="container mx-auto p-4">
      
<div style={{position:"fixed",  bottom:"5rem", zIndex:"1",
    right:"5rem"}}>
<svg 
onClick={() => navigate('/create-product')}
        xmlns="http://www.w3.org/2000/svg"
        width="75"
        height="75"
        fill="currentColor"
        className="bi bi-file-plus-fill iconPlus"
        viewBox="0 0 16 16"
      >
        <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM8.5 6v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 1 0z" />
      </svg>

</div>
    
      <Row className="py-5">
        <Col>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="addon-wrapping"
          />
        </Col>
        <Col>
          <DropdownButton
            className="float-right secondary"
            variant="secondary"
            title="Dropdown button"
          >
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
        </Col>
      </Row>
      <Row>
        {products?.map((cart, ind) => (
          <ProductCart key={ind} cart={cart} />
        ))}
      </Row>
    </div>
  );
};

export default Home;
