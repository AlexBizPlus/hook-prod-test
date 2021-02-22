import { RELATED, FAVORITE_RELATED } from "./action-types";

export const setRelatedProducts = (value) => ({
  type: RELATED,
  relatedProducts: value,
});

export const setFavoriteRelated = (id, value) => ({
  type: FAVORITE_RELATED,
  id: id,
  is_favorite: value,
});
