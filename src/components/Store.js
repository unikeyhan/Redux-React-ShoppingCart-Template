import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import spinner from "./assets/spinner.gif";

//Components
import Products from "./shared/Products";

//redux
import { fetchProducts } from "../redux/products/productsActions";

const Store = () => {
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.productsState);

  useEffect(() => {
    if (!productState.products.length) dispatch(fetchProducts());
  }, []);

  return (
    <div className="store-container container">
      <div className="row">
        {productState.loading ? (
          <img src={spinner} className="w-50 m-auto" alt="spinner" />
        ) : productState.error ? (
          <p>somthing went wrong</p>
        ) : (
          productState.products.map((product) => (
            <Products key={product.id} productData={product} />
          ))
        )}
      </div>
    </div>
  );
};
export default Store;
