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

export const setCart = (value) => ({
  type: CART,
  cart: value,
});

export const setReduceCountCart = (id) => ({
  type: REDUCE_COUNT_CART,
  id: id,
});

export const setIncreaseCountCart = (id, price) => ({
  type: INCREASE_COUNT_CART,
  id: id,
  price: price,
});

export const setCartProducts = (value) => ({
  type: CART_PRODUCTS,
  cartProducts: value,
});

export const setCartOrder = (value) => ({
  type: CART_ORDER,
  order: value,
});

export const setCartDelivery = (value) => ({
  type: CART_DELIVERY,
  delivery: value,
});

export const setCartPromocode = (value) => ({
  type: CART_PROMOCODE,
  promocode: value,
});

export const setCartTotal = () => ({
  type: CART_TOTAL,
});
