import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import cn from "classnames";
import s from "./Snippet.module.scss";
import {
  setReduceCountCart,
  setIncreaseCountCart,
} from "../../store/actions/cart-actions";
import { DEFAULT_ALLERGIES } from "../../const";
import { setFavoriteRelated } from "../../store/actions/related-actions";
import { ReactComponent as FavoriteSvg } from "../../img/heart.svg";
import { ReactComponent as BasketSvg } from "../../img/basket.svg";
import { ReactComponent as AllergyFreeSvg } from "../../img/allergy_free.svg";

const Snippet = ({ product }) => {
  const cartProducts = useSelector((state) => state.CART.cart);
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(product.is_favorite);
  const [count, setCount] = useState(0);
  const [countText, setCountText] = useState("Add");
  const [zeroCount, setZeroCount] = useState(true);
  const priceItem = `1 pc / \u00A3 ${product.price}`;
  const totalPriceSinglePattern = `\u00A3${product.price}`;
  const totalPricePattern = `\u00A3${
    Math.round(product.price * count * 100) / 100
  }`;
  const [totalPrice, setTotalPrice] = useState(totalPriceSinglePattern);

  useEffect(() => {
    for (let i = 0; i < cartProducts.length; i++) {
      if (cartProducts[i].product_id === product.id) {
        setCount(cartProducts[i].count);
        setIsFavorite(cartProducts[i].is_favorite);
        break;
      }
    }
  }, [cartProducts, product.id]);

  useEffect(() => {
    if (count === 0) {
      setZeroCount(true);
      setCountText("Add");
      setTotalPrice(totalPriceSinglePattern);
    } else {
      setZeroCount(false);
      setCountText(count);
      setTotalPrice(totalPricePattern);
    }
  }, [count, totalPricePattern, totalPriceSinglePattern]);

  const handleFavoriteClick = () => {
    const favoriteValue = !product.is_favorite;
    dispatch(setFavoriteRelated(product.id, favoriteValue));
    setIsFavorite(favoriteValue);
  };

  const productSpecials = () => {
    switch (true) {
      case product.is_original:
        return;

      case product.is_allergy_free:
        return (
          <div className={cn(s.allergy_free_wrapper)}>
            <div className={cn(s.allergy_free_svg_wrapper)}>
              <AllergyFreeSvg className={cn(s.allergy_free_svg)} />
            </div>
            <span>Allergy free</span>
          </div>
        );

      case product.special_offer > 0:
        return (
          <div className={cn(s.special_offer)}>
            <span>-{product.special_offer}%</span>
          </div>
        );

      default:
        return (
          <div className={cn(s.allergies_wrapper)}>
            <ul className={cn(s.allergies)}>
              {product.allergies.map((item, i) => {
                if (i < DEFAULT_ALLERGIES) {
                  return (
                    <li className={cn(s.allergies_item)} key={item.name}>
                      <img
                        src={item.img}
                        alt={item.name}
                        width={item.img_width}
                        height={item.img_height}
                      />
                    </li>
                  );
                }
              })}
            </ul>
            {product.allergies.length > DEFAULT_ALLERGIES && (
              <span className={cn(s.allergies_item_text)}>
                +{product.allergies.length - DEFAULT_ALLERGIES}
              </span>
            )}
          </div>
        );
    }
  };

  const handleBasketClick = () => {
    dispatch(setReduceCountCart(product.id));
    setCount(0);
  };

  const handleIncreaseImgClick = () => {
    dispatch(setIncreaseCountCart(product.id, product.price));
    setCount(count + 1);
  };

  return (
    <div className={cn(s.root)}>
      {productSpecials()}
      <FavoriteSvg
        className={cn(s.favorite_svg, {
          [s.favorite_color_svg]: isFavorite,
        })}
        onClick={handleFavoriteClick}
      />
      <h5 className={cn(s.name)}>{product.name}</h5>
      <img
        className={cn(s.img)}
        src={product.img}
        alt={product.name}
        width="100"
        height="100"
      />
      <p className={cn(s.price)}>{priceItem}</p>
      <div className={cn(s.container)}>
        <p className={cn(s.total_price)}>{totalPrice}</p>
        <div className={cn(s.count_actions)}>
          {product.is_low_stock && (
            <div className={cn(s.low_stock_wrapper)}>
              <span className={cn(s.low_stock_text)}>Low stock!</span>
              <span className={cn(s.low_stock_count_text)}>
                {product.low_stock} products left
              </span>
            </div>
          )}
          <div
            className={cn(s.basket_container, { [s.hidden]: zeroCount })}
            onClick={handleBasketClick}
          >
            <BasketSvg className={cn(s.basket)} />
          </div>
          <span className={cn(s.count, { [s.link]: zeroCount })}>
            {countText}
          </span>
          <div
            className={cn(s.increase_count)}
            onClick={handleIncreaseImgClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Snippet;
