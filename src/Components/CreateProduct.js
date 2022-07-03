import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createNewProduct } from "../Redux/Action/ProductAction";
import Swal from "sweetalert2";

const CreateProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const requestStatus = useSelector((state) => state.cart?.createProductInfo);
  const [validated, setValidated] = useState(false);
  const [formValues, setFormValues] = useState({
    productName: "",
    desc: "",
    imageURL: "",
    category: 1,
    price: "",
    ownEmail: "ftastanfanus@gmail.com",
  });

  useEffect(() => {
    if (requestStatus?.success) {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Product Created",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
    }
  }, [requestStatus?.success]);

  const sendNewProduct = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      event.preventDefault();
      console.log(formValues);
      dispatch(createNewProduct());
    }
  };
  return (
    <>
      <h1 className="my-5">Create Product</h1>
      <Form
        onSubmit={sendNewProduct}
        noValidate
        validated={validated}
        style={{ width: "70%", margin: "auto" }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            required
            value={formValues.productName}
            onChange={(e) =>
              setFormValues({ ...formValues, productName: e.target.value })
            }
            type="text"
            placeholder="Product name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <textarea
            required
            value={formValues.desc}
            onChange={(e) =>
              setFormValues({ ...formValues, desc: e.target.value })
            }
            className="form-control"
            placeholder="Description"
            rows="5"
            aria-label="With textarea"
          ></textarea>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            required
            onChange={(e) =>
              setFormValues({ ...formValues, imageURL: e.target.value })
            }
            value={formValues.imageURL}
            type="url"
            placeholder="Image URL"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <select
            required
            value={formValues.category}
            onChange={(e) =>
              setFormValues({ ...formValues, category: e.target.value })
            }
            className="form-select"
            aria-label="Default select example"
          >
            <option value="1">One</option>
          </select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            required
            value={formValues.price}
            onChange={(e) =>
              setFormValues({ ...formValues, price: e.target.value })
            }
            type="number"
            placeholder="Price"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default CreateProduct;
