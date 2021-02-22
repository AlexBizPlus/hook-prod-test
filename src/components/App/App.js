import React from "react";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import cn from "classnames";
import s from "./App.module.scss";
import { Routes, DEFAULT_ITEM } from "../../const";
import ProductPage from "../../pages/ProductPage/ProductPage";
import CartPage from "../../pages/CartPage/CartPage";
import Error404 from "../../pages/Error404/Error404";

const App = () => {
  return (
    <Router className={cn(s.root)}>
      <Switch>
        <Route exact path={`${Routes.PRODUCT}/:id`} component={ProductPage} />
        <Route exact path={Routes.CART} component={CartPage} />
        <Route exact path={Routes.ERROR404} component={Error404} />
        <Redirect
          to={`${Routes.PRODUCT}/${DEFAULT_ITEM}`}
          component={ProductPage}
        />
      </Switch>
    </Router>
  );
};

export default App;
