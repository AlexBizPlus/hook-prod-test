import { combineReducers } from "redux";
import productReducer from "./product-reducer";
import relatedReducer from "./related-reducer";
import cartReducer from "./cart-reducer";

export default combineReducers({
  PRODUCT: productReducer,
  RELATED: relatedReducer,
  CART: cartReducer,
});
