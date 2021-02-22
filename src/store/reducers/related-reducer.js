import { RELATED, FAVORITE_RELATED } from "../actions/action-types";

const initialState = {
  relatedProducts: [],
};

const changeFavoriteStatus = (products, id, value) => {
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      products[i].is_favorite = value;
      break;
    }
  }
};

const relatedReducer = (state = initialState, action) => {
  switch (action.type) {
    case RELATED:
      return {
        ...state,
        relatedProducts: action.relatedProducts,
      };

    case FAVORITE_RELATED:
      changeFavoriteStatus(
        state.relatedProducts,
        action.id,
        action.is_favorite
      );

      return {
        ...state,
      };

    default:
      return state;
  }
};

export default relatedReducer;
