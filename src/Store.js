import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productReducer } from './Redux/Reducer/ProductReducer';
import { categoriesReducer } from './Redux/Reducer/CategoriesReducer';

const reducer = combineReducers({
  cart: productReducer,
  categories:categoriesReducer,
});



const initialState = {
  cart: {},
  categories:{}
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;