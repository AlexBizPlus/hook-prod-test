import React from "react";
import { useParams } from "react-router-dom";
import cn from "classnames";
import s from "./ProductPage.module.scss";
import { Products } from "../../const";
import Header from "../../components/Header/Header";
import ProductItem from "../../components/ProductItem/ProductItem";
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";
import Specification from "../../components/Specification/Specification";

const ProductPage = () => {
  const { id } = useParams();
  const product = Products[id];

  return (
    <div className={cn(s.root)}>
      <Header caption={`Milk & Cheese`} />
      <ProductItem product={product} />
      <RelatedProducts idList={product.related_products_id} />
      <Specification
        nutrition={product.nutrition}
        ingridients={product.ingridients}
        other={product.other}
      />
    </div>
  );
};

export default ProductPage;
