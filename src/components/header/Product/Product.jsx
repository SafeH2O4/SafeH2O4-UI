import React from "react";
import "../Product/Product.css";
import product from "../../../../src/components/header/Product/img1.png";
import product2 from "../../../../src/components/header/Product/img2.png";
import product3 from "../../../../src/components/header/Product/img3.png";

const products = [
  {
    id: 1,
    image: product,
    name: "Aquaguard premier",
    type: "Ro + uv",
    price: 9500,
  },
  {
    id: 2,
    image: product2,
    name: "Aquaguard premier",
    type: "Ro + uv",
    price: 9500,
  },
  {
    id: 3,
    image: product3,
    name: "Aquaguard premier",
    type: "Ro + uv",
    price: 9500,
  },
  {
    id: 4,
    image: product,
    name: "Aquaguard premier",
    type: "Ro + uv",
    price: 9500,
  },
  {
    id: 5,
    image: product2,
    name: "Aquaguard premier",
    type: "Ro + uv",
    price: 9500,
  },
  {
    id: 6,
    image: product3,
    name: "Aquaguard premier",
    type: "Ro + uv",
    price: 9500,
  },
  {
    id: 7,
    image: product,
    name: "Aquaguard premier",
    type: "Ro + uv",
    price: 9500,
  },
  {
    id: 8,
    image: product,
    name: "Aquaguard premier",
    type: "Ro + uv",
    price: 9500,
  },
];

const Product = () => {
  const handleBuyNowClick = () => {
    alert("Thank you for your purchase!");
  };

  return (
    <div className="product-wrapper">
      <div className="product">
        {products.map((product) => (
          <div className="productcontent" key={product.id}>
            <img
              className="product-img"
              src={product.image}
              alt={product.name}
            />
            <h3>{product.name}</h3>
            <h4>{product.type}</h4>
            <h1>{product.price}</h1>
            <button onClick={handleBuyNowClick}>Buy now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
