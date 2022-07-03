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

export const productReducer = (
  state = {
    products: {
      productList: [],
      loading: false,
      success: false,
      error: false,
    },
    productInfo: {
      productDetails: {},
      loading: false,
      success: false,
      error: false,
    },
    createProductInfo: {
      loading: false,
      success: false,
      error: false,
    },
  },
  action
) => {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
      return {
        ...state,
        products: {
          productList: [],
          loading: false,
          success: false,
          error: false,
        },
      };

    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: {
          productList: action.payload,
          loading: false,
          success: true,
          error: false,
        },
      };

    case GET_PRODUCTS_ERROR:
      return {
        ...state,
        products: {
          productList: action.payload,
          loading: false,
          success: false,
          error: true,
        },
      };
    case GET_PRODUCTS_DETAIL_REQUEST:
      return {
        ...state,
        productInfo: {
          productDetails: {},
          loading: true,
          success: false,
          error: false,
        },
      };

    case GET_PRODUCTS_DETAIL_SUCCESS:
      return {
        ...state,
        productInfo: {
          productDetails: action.payload,
          loading: false,
          success: true,
          error: false,
        },
      };

    case GET_PRODUCTS_DETAIL_ERROR:
      return {
        ...state,
        productInfo: {
          productDetails: action.payload,
          loading: false,
          success: false,
          error: true,
        },
      };
    case CREATE_PRODUCTS_REQUEST:
      return {
        ...state,
        createProductInfo: {
          loading: true,
          success: false,
          error: false,
        },
      };

    case CREATE_PRODUCTS_SUCCESS:
      return {
        ...state,
        createProductInfo: {
          loading: false,
          success: true,
          error: false,
        },
      };

    case CREATE_PRODUCTS_ERROR:
      return {
        ...state,
        createProductInfo: {
          loading: false,
          success: false,
          error: true,
        },
      };

    default:
      return state;
  }
};
