import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Routes } from "../../const";
import cn from "classnames";
import s from "./Footer.module.scss";
import { ReactComponent as LigthingSvg } from "../../img/ligthing.svg";

const Footer = () => {
  const cartTotal = useSelector((state) => state.CART.total);

  return (
    <section className={cn(s.root)}>
      <div className={cn(s.wrapper)}>
        <div className={cn(s.delivery_wrapper)}>
          <div className={cn(s.delivery_svg_container)}>
            <LigthingSvg className={cn(s.delivery_svg)} />
          </div>
          <div className={cn(s.text)}>
            <span className={cn(s.caption)}>Delivery:</span>
            <span className={cn(s.value)}>25-30 min</span>
          </div>
        </div>
        <div className={cn(s.text)}>
          <span className={cn(s.caption)}>Total:</span>
          <span className={cn(s.total_value)}>£ {cartTotal}</span>
        </div>
        <Link to={Routes.ERROR404} className={cn(s.link)}>
          <span>Checkout</span>
        </Link>
      </div>
    </section>
  );
};

export default Footer;
