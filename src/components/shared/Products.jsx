import React from "react";
import { Link } from "react-router-dom";

//redux
import { useSelector, useDispatch } from "react-redux";
import {
  addItem,
  removeItem,
  increase,
  decrease,
} from "../../redux/cart/cartAction";

// function
import { shorten, isInCart, quantityCount } from "../../helpers/function";

const Products = ({ productData }) => {
  const state = useSelector((state) => state.cartState);
  const dispatch = useDispatch();

  return (
    <div className="product-box col-sm-6 col-md-4 col-lg-3">
      <div>
        <Link to={`/products/${productData.id}`}>
          <img src={productData.image} style={{ width: "100%" }} alt="image" />
        </Link>
        <div className="title-price">
          <h3 title={productData.title}>{shorten(productData.title)}</h3>
          <p>{productData.price} $</p>
        </div>
        <div className="details-buttons">
          <Link to={`/products/${productData.id}`}>Details</Link>
          {
            <div className="buttons">
              {quantityCount(state, productData.id) === 1 && (
                <button
                  className="REMOVE_ITEM"
                  onClick={() => dispatch(removeItem(productData))}
                >
                  <i className="fa-solid fa-trash-can"></i>
                </button>
              )}
              {quantityCount(state, productData.id) > 1 && (
                <button
                  className="DECREASE"
                  onClick={() => dispatch(decrease(productData))}
                >
                  -
                </button>
              )}
              {quantityCount(state, productData.id) > 1 && (
                <span className="counter">
                  {quantityCount(state, productData.id)}
                </span>
              )}
              {isInCart(state, productData.id) ? (
                <button
                  className="INCREASE"
                  onClick={() => dispatch(increase(productData))}
                >
                  +
                </button>
              ) : (
                <button
                  className="ADD_ITEM"
                  onClick={() => dispatch(addItem(productData))}
                >
                  Add to Cart
                </button>
              )}
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Products;
