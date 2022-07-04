import {
    GET_CATEGORIES_REQUEST,
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_ERROR,
} from "../Action-Type/ProductActionTypes";
  
  export const categoriesReducer = (
    state = {
        categories: {
        categoryList: [],
        loading: false,
        success: false,
        error: false,
      },
    
    },
    action
  ) => {
    switch (action.type) {
      case GET_CATEGORIES_REQUEST:
        return {
          ...state,
          categories: {
            categoryList: [],
            loading: false,
            success: false,
            error: false,
          },
        };
  
      case GET_CATEGORIES_SUCCESS:
        return {
          ...state,
          categories: {
            categoryList: action.payload,
            loading: false,
            success: true,
            error: false,
          },
        };
  
      case GET_CATEGORIES_ERROR:
        return {
          ...state,
          categories: {
            categoryList: action.payload,
            loading: false,
            success: false,
            error: true,
          },
        };
   
      default:
        return state;
    }
  };
  