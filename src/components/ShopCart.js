import React, { Component, useContext } from "react";
import { Link } from "react-router-dom";

// Components
import Cart from "./shared/Cart";

//redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clear, checkout } from "../redux/cart/cartAction";

const ShopCart = () => {
  const state = useSelector((state) => state.cartState);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="ShopCart-container">
        <div className="row">
          <div className="cartBox_1 col-md-8 col-lg-9">
            {state.selectedItems.map((item) => (
              <Cart key={item.id} data={item} />
            ))}
          </div>
          {state.itemsCounter > 0 && (
            <div className="cartBox_2 col-md-4 col-lg-3">
              <p>
                <span>Total Items : </span>
                {state.itemsCounter}
              </p>
              <p>
                <span>Total Payments: </span>
                {state.total} $
              </p>
              <div>
                <button
                  onClick={() => {
                    dispatch(clear());
                  }}
                >
                  Clear
                </button>
                <button
                  onClick={() => {
                    dispatch(checkout());
                  }}
                >
                  Checkout
                </button>
              </div>
            </div>
          )}
          {state.checkOut && (
            <div className="checkOut-clear offset-md-4 offset-md-3 col-md-4 col-lg-3">
              <h3>Check Out Successfuly</h3>
              <Link to="/products">Buy More</Link>
            </div>
          )}
          {!state.checkOut && state.itemsCounter === 0 && (
            <div className="checkOut-clear offset-md-4 offset-md-3 col-md-4 col-lg-3">
              <h3>Want to Buy</h3>
              <Link to="/products">Go To Shop</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopCart;
