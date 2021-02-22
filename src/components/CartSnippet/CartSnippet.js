import React, { useEffect, useState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import cn from "classnames";
import s from "./CartSnippet.module.scss";
import {
  setReduceCountCart,
  setIncreaseCountCart,
  setCartOrder,
} from "../../store/actions/cart-actions";
import { addCartOrder } from "../../utils";
import { setFavoriteRelated } from "../../store/actions/related-actions";
import { ReactComponent as BasketSvg } from "../../img/basket.svg";

const CartSnippet = ({ product }) => {
  const cartProducts = useSelector((state) => state.CART.cart);
  const dispatch = useDispatch();
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
    dispatch(setCartOrder(addCartOrder(cartProducts)));
  }, [count]);

  const cartProductSpecials = () => {
    switch (true) {
      case product.special_offer > 0:
        return (
          <div className={cn(s.special_offer)}>
            <span>Special offer: -{product.special_offer}%</span>
          </div>
        );
      default:
        return;
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
      <div className={cn(s.wrapper)}>
        <img
          className={cn(s.img)}
          src={product.img[0]}
          alt={product.name}
          width="44"
          height="auto"
        />
        <div className={cn(s.middle_block)}>
          <h4
            className={cn(s.name, { [s.name_line]: product.special_offer > 0 })}
          >
            {product.name}
          </h4>
          {cartProductSpecials()}
          <div className={cn(s.price_wrapper)}>
            <span className={cn(s.total_price)}>{totalPrice}</span>
            <span className={cn(s.price)}>{priceItem}</span>
          </div>
        </div>
      </div>
      <div className={cn(s.count_actions)}>
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
  );
};

const mapStateToProps = ({ CART }) => {
  return {
    cart: CART.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFavoriteRelated: (id, value) => dispatch(setFavoriteRelated(id, value)),
    setReduceCountCart: (id) => dispatch(setReduceCountCart(id)),
    setIncreaseCountCart: (id, price) =>
      dispatch(setIncreaseCountCart(id, price)),
    setCartOrder: (products) => dispatch(setCartOrder(products)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartSnippet);
