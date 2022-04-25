import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductItem = (props) => {
  // const product = useSelector((state) => state.allProducts.products);
  // const { id, title } = product[0];
  const { product } = props;
  return (
    <div key={product.id} className="four column wide">
      <Link to={`/product/${product.id}`}>
        <div className="ui link cards">
          <div className="card">
            <div className="image">
              <img src={product.image} alt={product.image} />
            </div>
            <div className="content">
              <div className="header">{product.title}</div>
              <div className="meta price">$ {product.price}</div>
              <div className="meta">$ {product.category}</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
