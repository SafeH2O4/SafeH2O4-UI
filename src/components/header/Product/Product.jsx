import React, { useState } from "react";
import "../Product/Product.css";
import product from "../../../../src/components/header/Product/img1.png";
import product2 from "../../../../src/components/header/Product/img2.png";
import product3 from "../../../../src/components/header/Product/img3.png";

import Formp from "../../Form/Forms";

const products = [
  {
    id: 1,
    image: product,
    name: "Aquaguard EVO",
    type: "Ro + uv",
    price: 3400,
  },
  {
    id: 2,
    image: product2,
    name: "Aquaguard premier",
    type: "Ro + uv",
    price: 1200,
  },
  {
    id: 3,
    image: product3,
    name: "Aquaguard Keyhouse",
    type: "Ro + uv",
    price: 7600,
  },
  {
    id: 4,
    image: product,
    name: "Aquaguard Mighty",
    type: "Ro + uv",
    price: 8774,
  },
  {
    id: 5,
    image: product2,
    name: "Aquaguard Green",
    type: "Ro + uv",
    price: 5633,
  },
  {
    id: 6,
    image: product3,
    name: "Aquaguard Gold",
    type: "Ro + uv",
    price: 8000,
  },
  {
    id: 7,
    image: product,
    name: "Aquaguard Fog",
    type: "Ro + uv",
    price: 6100,
  },
  {
    id: 8,
    image: product,
    name: "Aquaguard Mist",
    type: "Ro + uv",
    price: 5999,
  },
];

const Product = () => {
  const [openForm, setOpenForm] = useState(false);
  const [selectedProductName, setSelectedProductName] = useState("");

  const handleBuyNowClick = (product) => {
    setSelectedProductName(product.name);
    setOpenForm(true);
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
            <button className="formBtn" onClick={() => handleBuyNowClick(product)}>
              Buy now
            </button>
          </div>
        ))}
      </div>
      {openForm && (
        <Formp closeForm={() => setOpenForm(false)} productName={selectedProductName} />
      )}
    </div>
  );
};

export default Product;
