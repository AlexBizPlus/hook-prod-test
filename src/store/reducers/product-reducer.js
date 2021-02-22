import { PRODUCT, FAVORITE_PRODUCT } from "../actions/action-types";

const initialState = {
  product: {},
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT:
      return {
        ...state,
        product: action.product,
      };

    case FAVORITE_PRODUCT:
      state.product.is_favorite = action.is_favorite;

      return {
        ...state,
      };

    default:
      return state;
  }
};

export default productReducer;
