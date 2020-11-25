import productsReducer from "./reducers/productsReducer";
import productDetailsReducer from "./reducers/productDetailsReducer";
import cartReducer from "./reducers/cartReducer";
import { createStore, combineReducers } from "redux";

export default createStore(
  combineReducers({
    cart: cartReducer,
    products: productsReducer,
    productDetail: productDetailsReducer
  })
);
