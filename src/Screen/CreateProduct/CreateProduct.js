import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createNewProduct } from "../../Redux/Action/ProductAction";
import { getCategories } from "../../Redux/Action/CategoriesAction";
import Swal from "sweetalert2";

const CreateProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const requestStatus = useSelector((state) => state.cart?.createProductInfo);
  const categories = useSelector(
    (state) => state.categories?.categories?.categoryList
  );
  const [validated, setValidated] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    description: "",
    avatar: "",
    category: "",
    price: "",
    developerEmail: "ftastanfanus@gmail.com",
  });
  useEffect(() => {
    dispatch(getCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requestStatus?.success]);

  const sendNewProduct = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      event.preventDefault();
      dispatch(createNewProduct(formValues));
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
            value={formValues.name}
            onChange={(e) =>
              setFormValues({ ...formValues, name: e.target.value })
            }
            type="text"
            placeholder="Product name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <textarea
            required
            value={formValues.description}
            onChange={(e) =>
              setFormValues({ ...formValues, description: e.target.value })
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
              setFormValues({ ...formValues, avatar: e.target.value })
            }
            value={formValues.avatar}
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
            <option key="0">Select Category</option>
            {categories?.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            required
            value={formValues.price}
            onChange={(e) =>
              setFormValues({ ...formValues, price: +e.target.value })
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
