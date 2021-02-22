import React from "react";
import { Link } from "react-router-dom";
import { Routes } from "../../const";
import cn from "classnames";
import s from "./Header.module.scss";
import { ReactComponent as ArrowToLeftSvg } from "../../img/arrow-line-to-left.svg";

const Header = ({ caption }) => {
  return (
    <section className={cn(s.root)}>
      <div className={cn(s.wrapper)}>
        <h2 className={cn(s.h2)}>{caption}</h2>
        <Link to={Routes.CART}>
          <ArrowToLeftSvg className={cn(s.arrow_svg)} />
        </Link>
      </div>
    </section>
  );
};

export default Header;
