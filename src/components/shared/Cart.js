import React, { useContext } from "react";

//redux
import { useDispatch } from "react-redux";
import { increase, decrease, removeItem } from "../../redux/cart/cartAction";

// Functions
import { shorten } from "../../helpers/function";

const Cart = (props) => {
  const dispatch = useDispatch();
  const { image, title, price, quantity } = props.data;
  return (
    <div>
      <img src={image} alt="product" />
      <div>
        <h3>{shorten(title)}</h3>
        <p>{price} $</p>
      </div>
      <div>
        <span>{quantity}</span>
      </div>
      <div>
        {quantity > 1 ? (
          <button onClick={() => dispatch(decrease(props.data))}>-</button>
        ) : (
          <button
            className="REMOVE_ITEM"
            onClick={() => dispatch(removeItem(props.data))}
          >
            <i className="fa-solid fa-trash-can"></i>
          </button>
        )}
        <button onClick={() => dispatch(increase(props.data))}>+</button>
      </div>
    </div>
  );
};

export default Cart;
