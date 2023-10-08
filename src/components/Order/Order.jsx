import { useEffect, useState } from "react";
import ProductCollection from "../ProductCollection/ProductCollection";
import "./Order.css";
import Cart from "../Cart/Cart";

const Order = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <>
      <h2>Product Collection</h2>
      <div className="order-content">
        <div className="order-page">
          {product.map((product) => (
            <ProductCollection key={product.id} product={product}></ProductCollection>
          ))}
        </div>

        <div className="cart">
          <Cart />
        </div>
      </div>
    </>
  );
};

export default Order;
