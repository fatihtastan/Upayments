import axios from "axios";
import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_DETAIL_REQUEST,
  GET_PRODUCTS_DETAIL_SUCCESS,
  GET_PRODUCTS_DETAIL_ERROR,
  CREATE_PRODUCTS_REQUEST,
  CREATE_PRODUCTS_SUCCESS,
  CREATE_PRODUCTS_ERROR,
} from "../Action-Type/ProductActionTypes";

export const getProducts = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_PRODUCTS_REQUEST,
    });
    const { data } = await axios.get(
      `https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/`
    );
    dispatch({
      type: GET_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUCTS_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getProductDetail = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_PRODUCTS_DETAIL_REQUEST,
    });
    const { data } = await axios.get(
      `https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/${id}`
    );
    dispatch({
      type: GET_PRODUCTS_DETAIL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUCTS_DETAIL_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const createNewProduct = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CREATE_PRODUCTS_REQUEST,
    });
    const { data } = await axios.get(
      `https://62286b649fd6174ca82321f1.mockapi.io/case-study/products`
    );
    dispatch({
      type: CREATE_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_PRODUCTS_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
