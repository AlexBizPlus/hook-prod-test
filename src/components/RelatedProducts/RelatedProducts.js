import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import cn from "classnames";
import s from "./RelatedProducts.module.scss";
import { setRelatedProducts } from "../../store/actions/related-actions";
import { Products } from "../../const";
import Snippet from "../../components/Snippet/Snippet";

const RelatedProducts = ({ idList }) => {
  const relatedProducts = useSelector((state) => state.RELATED.relatedProducts);
  const dispatch = useDispatch();
  const productListWrapperRef = useRef();
  const productListRef = useRef();
  const [length, setLength] = useState();
  const [listStyle, setListStyle] = useState();
  const [sliderStyle, setSliderStyle] = useState();

  useEffect(() => {
    dispatch(setRelatedProducts(findProduct(idList)));
  }, [dispatch, idList]);

  useEffect(() => {
    setListStyle(getComputedStyle(productListRef.current));
    setSliderStyle(getComputedStyle(productListWrapperRef.current));
    if (listStyle && sliderStyle) {
      setLength(
        parseInt(listStyle.width, 10) - parseInt(sliderStyle.width, 10)
      );
    }
  }, [length, listStyle, sliderStyle]);

  const findProduct = (idList) => {
    return Products.filter((product) => idList.includes(product.id));
  };

  const handleImgPointerDown = (evt) => {
    evt.preventDefault();

    let startCoordX = listStyle.transform.split(", ")[4]
      ? evt.clientX - listStyle.transform.split(", ")[4]
      : evt.clientX;

    let shift = 0;

    const onMouseMove = (moveEvt) => {
      moveEvt.preventDefault();
      shift = startCoordX - moveEvt.clientX;

      productListRef.current.setAttribute(
        "style",
        `transform:translateX(-${shift}px)`
      );

      if (shift < 0) {
        productListRef.current.setAttribute("style", `transform:translateX(0)`);
      }

      if (shift > length) {
        productListRef.current.setAttribute(
          "style",
          `transform:translateX(-${length}px)`
        );
      }
    };

    const onMouseUp = (upEvt) => {
      upEvt.preventDefault();

      document.removeEventListener("pointermove", onMouseMove);
      document.removeEventListener("pointerup", onMouseUp);
    };

    document.addEventListener("pointermove", onMouseMove);
    document.addEventListener("pointerup", onMouseUp);
  };

  return (
    <section className={cn(s.root)}>
      <div className={cn(s.wrapper)} ref={productListWrapperRef}>
        <h4 className={cn(s.h4)}>Buy with this product</h4>
        <ul
          className={cn(s.related_list)}
          ref={productListRef}
          onPointerDown={handleImgPointerDown}
        >
          {relatedProducts.map((item) => {
            return (
              <li className={cn(s.related_item)} key={item.id}>
                <Snippet product={item} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default RelatedProducts;
