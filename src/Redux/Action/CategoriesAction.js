import axios from "axios";
import {
    GET_CATEGORIES_REQUEST,
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_ERROR,
} from "../Action-Type/ProductActionTypes";

export const getCategories = () => async (dispatch, getState) => {
    try {
      dispatch({
        type: GET_CATEGORIES_REQUEST,
      });
      const { data } = await axios.get(
        `https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories/`
      );
      dispatch({
        type: GET_CATEGORIES_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_CATEGORIES_ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };