import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import cn from "classnames";
import s from "./CartPage.module.scss";
import Header from "../../components/Header/Header";
import CartElement from "../../components/CartElement/CartElement";
import Footer from "../../components/Footer/Footer";
import { Cart } from "../../const";
import { setCart } from "../../store/actions/cart-actions";

const CartPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCart(Cart));
  }, []);

  return (
    <div className={cn(s.root)}>
      <Header caption={`Cart`} />
      <CartElement />
      <Footer />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCart: (cart) => dispatch(setCart(cart)),
  };
};

export default connect(null, mapDispatchToProps)(CartPage);
