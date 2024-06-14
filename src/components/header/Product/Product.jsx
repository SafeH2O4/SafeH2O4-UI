import React, { useState } from "react";
import "../Product/Product.css";
import product1 from "../../../../src/components/header/Product/img4.jpg";
import product2 from "../../../../src/components/header/Product/img6.jpg";
import product3 from "../../../../src/components/header/Product/img11.jpg";
import product4 from "../../../../src/components/header/Product/img12.jpg";
import product5 from "../../../../src/components/header/Product/img14.jpg";
import product6 from "../../../../src/components/header/Product/img15.jpg";
import product7 from "../../../../src/components/header/Product/img18.jpg";
import product8 from "../../../../src/components/header/Product/img19.jpg";
import product9 from "../../../../src/components/header/Product/img20.jpg";
import product10 from "../../../../src/components/header/Product/img21.jpg";
import product11 from "../../../../src/components/header/Product/img22.jpg";
import product12 from "../../../../src/components/header/Product/img23.jpg";

import Formp from "../../Form/Forms";

const images = [
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
  product9,
  product10,
  product11,
  product12,
];

const products = [
  {
    id: 1,
    image: images[0],
    name: "Aqua 2090",
    type: "Premium Gray - 602",
    price: 9500,
  },
  {
    id: 2,
    image: images[1],
    name: "Aqua 2090",
    type: "Blue - 201",
    price: 9500,
  },
  {
    id: 3,
    image: images[2],
    name: "Aqua Roma",
    type: "Cherry - silver",
    price: 9500,
  },
  {
    id: 4,
    image: images[3],
    name: "Aqua Nine",
    type: "N 902",
    price: 9500,
  },
  {
    id: 5,
    image: images[4],
    name: "Aqua Nine",
    type: "N 301",
    price: 9500,
  },
  {
    id: 6,
    image: images[5],
    name: "Aqua Glory",
    type: "Aqua Green",
    price: 9500,
  },
  {
    id: 7,
    image: images[6],
    name: "Aqua Glory",
    type: "Black ",
    price: 9500,
  },
  {
    id: 8,
    image: images[7],
    name: "Aqua Glory",
    type: "Blue ",
    price: 9500,
  },
  {
    id: 9,
    image: images[8],
    name: "Aqua Nine",
    type: "N 302",
    price: 9500,
  },
  {
    id: 10,
    image: images[9],
    name: "Aquaguard Ultra",
    type: "RO + UV + Mineral",
    price: 9500,
  },
  {
    id: 11,
    image: images[10],
    name: "Aquaguard Max",
    type: "RO + UV",
    price: 9500,
  },
  {
    id: 12,
    image: images[11],
    name: "Aquaguard Pro",
    type: "RO + UV + UF",
    price: 9500,
  },
];

const Product = () => {
  const [openForm, setOpenForm] = useState(false);
  const [selectedProductName, setSelectedProductName] = useState("");

  const handleBuyNowClick = (product) => {
    setSelectedProductName(product.name+" "+product.type);
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
            <button
              className="formBtn"
              onClick={() => handleBuyNowClick(product)}
            >
              Buy now
            </button>
          </div>
        ))}
      </div>
      {openForm && (
        <Formp
          closeForm={() => setOpenForm(false)}
          productName={selectedProductName}
        />
      )}
    </div>
  );
};

export default Product;
