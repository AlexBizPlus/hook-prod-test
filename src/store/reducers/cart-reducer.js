import {
  CART,
  REDUCE_COUNT_CART,
  INCREASE_COUNT_CART,
  CART_PRODUCTS,
  CART_ORDER,
  CART_DELIVERY,
  CART_PROMOCODE,
  CART_TOTAL,
} from "../actions/action-types";

const initialState = {
  cart: [],
  cartProducts: [],
  order: 0,
  delivery: 0,
  promocode: 0,
  total: 0,
};

const reduceCount = (cart, id) => {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].product_id === id) {
      cart[i].count = 0;
      break;
    }
  }
};

const increaseCount = (cart, id, price) => {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].product_id === id) {
      cart[i].count++;
      return;
    }
  }
  return cart.push({
    product_id: id,
    price: price,
    count: 1,
  });
};

const countTotal = (...elem) => {
  return Math.round(elem.reduce((sum, item) => sum + item, 0) * 100) / 100;
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART:
      return {
        ...state,
        cart: action.cart,
      };

    case REDUCE_COUNT_CART:
      reduceCount(state.cart, action.id);

      return {
        ...state,
      };

    case INCREASE_COUNT_CART:
      increaseCount(state.cart, action.id, action.price);

      return {
        ...state,
      };

    default:
      return state;

    case CART_PRODUCTS:
      return {
        ...state,
        cartProducts: action.cartProducts,
      };

    case CART_ORDER:
      return {
        ...state,
        order: action.order,
      };

    case CART_DELIVERY:
      return {
        ...state,
        delivery: action.delivery,
      };

    case CART_PROMOCODE:
      return {
        ...state,
        promocode: action.promocode,
      };

    case CART_TOTAL:
      return {
        ...state,
        total: countTotal(state.order, state.delivery, state.promocode),
      };
  }
};

export default cartReducer;
