import { PRODUCT, FAVORITE_PRODUCT } from "./action-types";

export const setProduct = (value) => ({
  type: PRODUCT,
  product: value,
});

export const setFavoriteProduct = (value) => ({
  type: FAVORITE_PRODUCT,
  is_favorite: value,
});
