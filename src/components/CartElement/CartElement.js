import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import cn from "classnames";
import s from "./CartElement.module.scss";
import {
  setCartProducts,
  setCartOrder,
  setCartTotal,
} from "../../store/actions/cart-actions";
import { Products, PROMO_LENGTH, DEFAULT_PLACEHOLDER } from "../../const";
import { addCartOrder } from "../../utils";
import { Addresses } from "../../const";
import CartSnippet from "../../components/CartSnippet/CartSnippet";
import { ReactComponent as BasketSvg } from "../../img/basket.svg";

const CartElement = () => {
  const cartProductsShort = useSelector((state) => state.CART.cart);
  const cartProducts = useSelector((state) => state.CART.cartProducts);
  const cartOrder = useSelector((state) => state.CART.order);
  const cartDelivery = useSelector((state) => state.CART.delivery);
  const cartPromocode = useSelector((state) => state.CART.promocode);
  const cartTotal = useSelector((state) => state.CART.total);
  const dispatch = useDispatch();
  const [cityName, setCityName] = useState();
  const selectAddressRef = useRef();

  useEffect(() => {
    dispatch(setCartProducts(addCartProducts(cartProductsShort)));
    dispatch(setCartOrder(addCartOrder(cartProductsShort)));
  }, [cartProductsShort, dispatch]);

  useEffect(() => {
    dispatch(setCartTotal());
  }, [cartOrder, cartDelivery, cartPromocode, dispatch]);

  useEffect(() => {
    if (selectAddressRef.current.value) {
      setCityName(findCity(selectAddressRef.current.value));
    }
  }, []);

  const findCity = (address) => {
    for (let i = 0; i < Addresses.length; i++) {
      if (Addresses[i].name === address) {
        return Addresses[i].city;
      }
    }
    return "";
  };

  const addCartProducts = (cartProducts) => {
    const productsList = [];
    const newCart = cartProducts.filter((item) => item !== 0);
    newCart.map((item) => {
      if (item.count !== 0) {
        productsList.push(
          Products.find((product) => product.id === item.product_id)
        );
      }
    });
    return productsList;
  };

  const handleBasketClick = () => {
    selectAddressRef.current.value = "";
    setCityName("");
  };

  const handleSelectAddressChange = (evt) => {
    setCityName(findCity(evt.target.value));
  };

  return (
    <div className={cn(s.root)}>
      <div className={cn(s.wrapper)}>
        <div className={cn(s.caption_wrapper)}>
          <h3 className={cn(s.caption)}>Delivery address</h3>
          <BasketSvg className={cn(s.basket)} onClick={handleBasketClick} />
        </div>
        <form className={cn(s.form)} name="cart" id="cartForm">
          <label className={cn(s.select_label)} htmlFor="selectAddress">
            <select
              className={cn(s.select)}
              id="selectAddress"
              name="selectAddress"
              ref={selectAddressRef}
              onChange={handleSelectAddressChange}
            >
              {Addresses.map((item) => {
                return (
                  <option value={item.name} key={item.name}>
                    {item.name}
                  </option>
                );
              })}
            </select>
            <span className={cn(s.select_hint)}>{cityName}</span>
          </label>
          <div className={cn(s.input_wrapper)}>
            <label className={cn(s.input_label)} htmlFor="flat">
              <input
                className={cn(s.input)}
                type="text"
                id="flat"
                name="flat"
                placeholder="Flat"
              />
              <span className={cn(s.input_hint)}>Flat</span>
            </label>
            <label className={cn(s.input_label)} htmlFor="floor">
              <input
                className={cn(s.input)}
                type="number"
                id="floor"
                name="floor"
                placeholder="Floor"
              />
              <span className={cn(s.input_hint)}>Floor</span>
            </label>
            <label className={cn(s.input_label)} htmlFor="block">
              <input
                className={cn(s.input)}
                type="text"
                id="block"
                name="block"
                placeholder="Block"
              />
              <span className={cn(s.input_hint)}>Block</span>
            </label>
          </div>
          <div className={cn(s.caption_wrapper)}>
            {cartProducts.length > 0 && (
              <h3 className={cn(s.caption)}>{cartProducts.length} items</h3>
            )}
            {cartProducts.length === 0 && (
              <h3 className={cn(s.caption)}>Empty cart</h3>
            )}
          </div>
          <ul className={cn(s.cart_products)}>
            {cartProducts.map((item) => {
              return (
                <li key={item.id}>
                  <CartSnippet product={item} />
                </li>
              );
            })}
          </ul>
        </form>
      </div>
      <div className={cn(s.small_wrapper)}>
        <div className={cn(s.caption_wrapper)}>
          <h3 className={cn(s.caption)}>Payment</h3>
        </div>
        <label className={cn(s.input_promo_label)} htmlFor="promo">
          <input
            className={cn(s.input_promo)}
            type="text"
            id="promo"
            name="promo"
            placeholder={DEFAULT_PLACEHOLDER}
            minLength={PROMO_LENGTH}
            maxLength={PROMO_LENGTH}
          />
          <div />
        </label>
        <div className={cn(s.total_table_wrapper)}>
          <table className={cn(s.total_table)}>
            <tbody>
              <tr className={cn(s.total_table_row)}>
                <td className={cn(s.total_table_key)}>Order</td>
                <td className={cn(s.total_table_value)}>£ {cartOrder}</td>
              </tr>
              <tr className={cn(s.total_table_row)}>
                <td className={cn(s.total_table_key)}>Delivery</td>
                <td className={cn(s.total_table_value)}>£ {cartDelivery}</td>
              </tr>
              <tr className={cn(s.total_table_row)}>
                <td className={cn(s.total_table_key)}>Promocode</td>
                <td className={cn(s.total_table_value)}>£ {cartPromocode}</td>
              </tr>
            </tbody>
          </table>
          <div className={cn(s.total_row)}>
            <span className={cn(s.total_key)}>Total:</span>
            <span className={cn(s.total_value)}>£ {cartTotal}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartElement;
