import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  filterProductByCategory,
  filterProductByText,
  getProducts,
} from "../../Redux/Action/ProductAction";
import { Row, Col, Form } from "react-bootstrap";
import ProductCart from "../../Components/ProductCart/ProductCart";
import { getCategories } from "../../Redux/Action/CategoriesAction";
import "./home.css";
const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const categories = useSelector(
    (state) => state.categories?.categories?.categoryList
  );
  const products = useSelector(
    (state) => state.cart?.products?.filterProductList
  );
  const [category, setCategory] = useState("");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const filterByCategory = (e) => {
    setCategory(e.target.value);
    dispatch(filterProductByCategory(e.target.value));
  };
  const searchProduct = (e) => {
    setSearchText(e.target.value);
    dispatch(filterProductByText(e.target.value));
  };

  return (
    <div className="container mx-auto p-4">
      <div
        style={{
          position: "fixed",
          bottom: "5rem",
          zIndex: "1",
          right: "5rem",
        }}
      >
        <svg
          onClick={() => navigate("/create-product")}
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
        <Col className="col-4">
          <input
            onChange={(e) => searchProduct(e)}
            value={searchText}
            type="text"
            className="form-control"
            placeholder="Search products"
            aria-describedby="addon-wrapping"
          />
        </Col>
        <Col className="col-2 ml-auto mr-3">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <select
              required
              value={category}
              onChange={(e) => filterByCategory(e)}
              className="form-select"
              aria-label="Default select example"
            >
              <option value={""}>Select Category</option>
              {categories?.map((item) => (
                <option key={item.id} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          </Form.Group>
        </Col>
      </Row>
      {products?.length > 0 ? (
        <Row>
          {products?.map((cart, ind) => (
            <ProductCart key={ind} cart={cart} />
          ))}
        </Row>
      ) : (
        <Row>
          <Col>There are no products in the selected category.</Col>
        </Row>
      )}
    </div>
  );
};

export default Home;
