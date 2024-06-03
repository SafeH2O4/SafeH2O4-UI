import React from "react";
import "../Product/Product.css";
import product from "../../../../src/components/header/Product/img1.png";
import product2 from "../../../../src/components/header/Product/img2.png";
import product3 from "../../../../src/components/header/Product/img3.png";

const Product = () => {
  const handleBuyNowClick = () => {
    alert("Thank you for your purchase!");
  };
  return (
    <div className="product-wrapper">
      <div className="product">
        <div className="productcontent">
          <img
            className="product-img"
            src={product}
            alt="Aquaguard premier 1"
          />
          <h3>Aquaguard premier</h3>
          <h4>Ro + uv</h4>
          <h1>9500</h1>
          <button>Buy now</button>
        </div>

        <div className="productcontent">
          <img
            className="product-img"
            src={product2}
            alt="Aquaguard premier 2"
          />
          <h3>Aquaguard premier</h3>
          <h4>Ro + uv</h4>
          <h1>9500</h1>
          <button onClick={handleBuyNowClick}>Buy now</button>
        </div>

        <div className="productcontent">
          <img
            className="product-img"
            src={product3}
            alt="Aquaguard premier 3"
          />
          <h3>Aquaguard premier</h3>
          <h4>Ro + uv</h4>
          <h1>9500</h1>
          <button onClick={handleBuyNowClick}>Buy now</button>
        </div>

        <div className="productcontent">
          <img
            className="product-img"
            src={product}
            alt="Aquaguard premier 4"
          />
          <h3>Aquaguard premier</h3>
          <h4>Ro + uv</h4>
          <h1>9500</h1>
          <button onClick={handleBuyNowClick}>Buy now</button>
        </div>

        <div className="productcontent">
          <img
            className="product-img"
            src={product2}
            alt="Aquaguard premier 5"
          />
          <h3>Aquaguard premier</h3>
          <h4>Ro + uv</h4>
          <h1>9500</h1>
          <button onClick={handleBuyNowClick}>Buy now</button>
        </div>

        <div className="productcontent">
          <img
            className="product-img"
            src={product3}
            alt="Aquaguard premier 6"
          />
          <h3>Aquaguard premier</h3>
          <h4>Ro + uv</h4>
          <h1>9500</h1>
          <button onClick={handleBuyNowClick}>Buy now</button>
        </div>

        <div className="productcontent">
          <img
            className="product-img"
            src={product}
            alt="Aquaguard premier 7"
          />
          <h3>Aquaguard premier</h3>
          <h4>Ro + uv</h4>
          <h1>9500</h1>
          <button onClick={handleBuyNowClick}>Buy now</button>
        </div>

        <div className="productcontent">
          <img
            className="product-img"
            src={product}
            alt="Aquaguard premier 7"
          />
          <h3>Aquaguard premier</h3>
          <h4>Ro + uv</h4>
          <h1>9500</h1>
          <button onClick={handleBuyNowClick}>Buy now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
