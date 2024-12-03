import { useParams } from "react-router-dom";
import { products } from "../assets/products.js"; // Adjust the path as necessary
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function ProductPage({ addToCart }) {
  const { productId } = useParams();

  const [isSelected, setIsSelected] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  // Find the product by ID
  const product = products.find((item) => item.id === productId); // Assuming productId is a string

  // Handle case where product is not found
  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    setToastMessage(`${product.name} has been added to your cart`);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const handleClick = () => {
    setIsSelected(!isSelected);

    if (!isSelected) {
      setToastMessage(`${product.name} has been added to your wishlist`);
    } else {
      setToastMessage(`${product.name} has been removed from your wishlist`);
    }

    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const handleToastClose = () => {
    setShowToast(false);
  };

  const uniqueSizes = [...new Set(products.flatMap(item => item.sizes))];

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img
            src={product.image}
            style={{ height: "600px" }}
            alt={product.name}
            className="product-image"
          />
        </div>
        <div className="col-6">
          <div className="row text-start pb-2">
            <h4>{product.name}</h4>
          </div>
          <div className="row text-start pb-2">
            <p>{product.description}</p>
          </div>
          <div className="row text-start pb-2">
            <h2>R{product.price}</h2>
          </div>
          <div className="row d d-flex justify-content-between align-items-center">
            <div className="col-10">
              <button className="add-cart-btn w-100" onClick={handleAddToCart}>
                Add to cart
              </button>
            </div>
            <div className="col-2">
              <button
                role="button"
                tabIndex="0"
                className={`p-1 d-flex `}
                onClick={handleClick}
                onKeyPress={(e) => e.key === "Enter" && handleClick()} // Allows keyboard interaction
                style={{ cursor: "pointer" }}
              >
                {isSelected ? (
                  <BsHeartFill color="red" />
                ) : (
                  <BsHeart color="black" />
                )}
              </button>
            </div>
          </div>
          <div className="row">
            <div className="row p-4">
              <ul className="d-flex justify-content-between">
                {uniqueSizes.map((sz) => (
                  <button key={sz}>{sz}</button>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`toast ${showToast ? "show" : ""}`}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          zIndex: 1050,
          transition: "opacity 0.5s ease",
          opacity: showToast ? 1 : 0,
        }}
      >
        <div className="toast-header justify-content-between">
          <strong className="mr-auto">Notification</strong>
          <button
            type="button"
            className="btn ml-2 mb-1 close"
            onClick={handleToastClose}
          >
            <span>&times;</span>
          </button>
        </div>
        <div className="toast-body">{toastMessage}</ div>
      </div>
    </div>
  );
}

export default ProductPage;