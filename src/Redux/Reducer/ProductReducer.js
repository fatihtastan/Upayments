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
  FILTER_BY_CATEGORIES,
  FILTER_BY_CATEGORIES_TEXT,
} from "../Action-Type/ProductActionTypes";

export const productReducer = (
  state = {
    products: {
      productList: [],
      filterProductList: [],
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
          filterProductList: [],
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
          filterProductList: action.payload,
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
          filterProductList: action.payload,
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
    case FILTER_BY_CATEGORIES:
      let newProductList;
      const copiedProductList = [...state.products.productList];
      if(action.payload !== ""){
         newProductList = copiedProductList.filter(
          (item) => item.category === action.payload
        );
      }else {
         newProductList= copiedProductList
      }
      return {
        ...state,
        products: {
          ...state.products,
          filterProductList: newProductList,
        },
      };
    case FILTER_BY_CATEGORIES_TEXT:
      const copiedProducts = [...state.products.productList];
      const newList = copiedProducts.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(action.payload.toLowerCase())
    })
  
      return {
        ...state,
        products: {
          ...state.products,
          filterProductList: newList,
        },
      };
    default:
      return state;
  }
};
