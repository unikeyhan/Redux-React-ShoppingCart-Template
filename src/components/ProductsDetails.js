import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";

//Contexts
import { useSelector } from "react-redux";

const ProductsDetails = (props) => {
  const data = useSelector((state) => state.productsState.products);
  const params = useParams();
  const product = data[params.id - 1];

  const { id, title, price, description, category, image, rating } = product;

  return (
    <div className="container">
      <div className="details-container">
        <div className="row">
          <div className="col-md-6 col-lg-5">
            <img src={image} style={{ width: "100%" }} />
          </div>
          <div className="col-md-6 col-lg-7  mt-5 mt-md-0">
            <h4>{title}</h4>
            <p>{description}</p>
            <p className="category">
              <span>category: </span>
              {category}
            </p>
            <p className="price-goback">
              <span>{price}$</span>
              <Link to="/product">Back to Shop</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
