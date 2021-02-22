import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect, useSelector, useDispatch } from "react-redux";
import cn from "classnames";
import s from "./ProductItem.module.scss";
import {
  setProduct,
  setFavoriteProduct,
} from "../../store/actions/product-actions";
import {
  setCart,
  setReduceCountCart,
  setIncreaseCountCart,
} from "../../store/actions/cart-actions";
import { DEFAULT_ALLERGIES, MIN_SHIFT, Cart } from "../../const";
import { ReactComponent as BasketSvg } from "../../img/basket.svg";
import { ReactComponent as FavoriteSvg } from "../../img/heart.svg";
import { ReactComponent as AllergyFreeSvg } from "../../img/allergy_free.svg";

const ProductItem = ({ product }) => {
  const cartProducts = useSelector((state) => state.CART.cart);
  const [paginationStart, setPaginationStart] = useState(true);
  const [paginationMiddle, setPaginationMiddle] = useState(false);
  const [paginationEnd, setPaginationEnd] = useState(false);
  const [imgNumber, setImgNumber] = useState(0);
  const [count, setCount] = useState(0);
  const [countText, setCountText] = useState("Add");
  const [zeroCount, setZeroCount] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  const totalPriceSinglePattern = `\u00A3${product.price}`;
  const totalPricePattern = `\u00A3${
    Math.round(product.price * count * 100) / 100
  }`;
  const [totalPrice, setTotalPrice] = useState(totalPriceSinglePattern);
  const dispatch = useDispatch();
  const price = `1 pc / \u00A3 ${product.price}`;

  useEffect(() => {
    dispatch(setProduct(product));
    dispatch(setCart(Cart));
  }, []);

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
  }, [count]);

  useEffect(() => {
    if (imgNumber === 0) {
      setPaginationStart(true);
      setPaginationMiddle(false);
      setPaginationEnd(false);
    }

    if (imgNumber === product.img.length - 1) {
      setPaginationStart(false);
      setPaginationMiddle(false);
      setPaginationEnd(true);
    }

    if (imgNumber > 0 && imgNumber < product.img.length - 1) {
      setPaginationStart(false);
      setPaginationMiddle(true);
      setPaginationEnd(false);
    }
  }, [imgNumber, product.img.length]);

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

  const handleImgPointerDown = (evt) => {
    evt.preventDefault();
    let startCoordX = evt.clientX;
    let shift = 0;

    const onMouseMove = (moveEvt) => {
      moveEvt.preventDefault();
      shift = startCoordX - moveEvt.clientX;
    };

    const onMouseUp = (upEvt) => {
      upEvt.preventDefault();

      if (shift > MIN_SHIFT && imgNumber < product.img.length - 1) {
        setImgNumber(imgNumber + 1);
      }

      if (shift < -MIN_SHIFT && imgNumber > 0) {
        setImgNumber(imgNumber - 1);
      }

      document.removeEventListener("pointermove", onMouseMove);
      document.removeEventListener("pointerup", onMouseUp);
    };

    document.addEventListener("pointermove", onMouseMove);
    document.addEventListener("pointerup", onMouseUp);
  };

  const handleBasketClick = () => {
    dispatch(setReduceCountCart(product.id));
    setCount(0);
  };

  const handleIncreaseImgClick = () => {
    dispatch(setIncreaseCountCart(product.id, product.price));
    setCount(count + 1);
  };

  const handleFavoriteClick = () => {
    const favoriteValue = !product.is_favorite;
    dispatch(setFavoriteProduct(favoriteValue));
    setIsFavorite(favoriteValue);
  };

  return (
    <section className={cn(s.root)}>
      <div className={cn(s.wrapper)}>
        {productSpecials()}
        <h3 className={cn(s.caption)}>
          Just Milk Semi-Skimmed 6 x 1L (Case of 2)
        </h3>
        <div className={cn(s.img_wrapper)}>
          <img
            className={cn(s.img)}
            src={product.img[imgNumber]}
            alt={product.name}
            width="243"
            height="190"
            onPointerDown={handleImgPointerDown}
          />
          <ul className={cn(s.img_pagination_wrapper)}>
            <li
              className={cn(s.img_pagination, {
                [s.img_pagination_active]: paginationStart,
              })}
            ></li>
            <li
              className={cn(s.img_pagination, {
                [s.img_pagination_active]: paginationMiddle,
              })}
            ></li>
            <li
              className={cn(s.img_pagination, {
                [s.img_pagination_active]: paginationEnd,
              })}
            ></li>
          </ul>
        </div>
        <FavoriteSvg
          className={cn(s.favorite_svg, {
            [s.favorite_color_svg]: isFavorite,
          })}
          onClick={handleFavoriteClick}
        />
        <p className={cn(s.price)}>{price}</p>
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
        <ul className={cn(s.link_list)}>
          <li>
            <Link className={cn(s.link)} to={{ hash: "#nutrition" }}>
              Nutrition
            </Link>
          </li>
          <li>
            <Link className={cn(s.link)} to={{ hash: "#ingredients" }}>
              Ingredients
            </Link>
          </li>
          <li>
            <Link className={cn(s.link)} to={{ hash: "#other" }}>
              Other
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

const mapStateToProps = ({ PRODUCT, CART }) => {
  return {
    storedProduct: PRODUCT.storedProduct,
    cart: CART.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setProduct: (product) => dispatch(setProduct(product)),
    setFavoriteProduct: (is_favorite) =>
      dispatch(setFavoriteProduct(is_favorite)),
    setCart: (cart) => dispatch(setCart(cart)),
    setReduceCountCart: (id) => dispatch(setReduceCountCart(id)),
    setIncreaseCountCart: (id, price) =>
      dispatch(setIncreaseCountCart(id, price)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
