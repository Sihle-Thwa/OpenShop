import PropTypes from "prop-types";
import "../App.css"; // Import the CSS file
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProductCard({ product, onAddToCart }) {
  const navigate = useNavigate();
  const [isSelected, setIsSelected] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

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

  const handleProductClick = () => {
    navigate(`/product/${product.id}`); 
  };

  const handleAddToCart = () => {
    onAddToCart(product); 
    setToastMessage(`${product.name} has been added to your cart`);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <div className="card border-0">
      <div className="card-body">
        <img
          src={product.image}
          alt={product.name}
          onClick={handleProductClick}
          style={{ cursor: "pointer" }}
          className="product-image img-fluid" 
        />
        <div className="row d-flex justify-content-between align-items-center mt-2">
          <div className="col-8 col-md-10 text-start"><strong>{product.name}</strong> </div>
          <span
            role="button"
            tabIndex="0"
            className={`col-4 col-md-2 p-1 rounded-circle d-flex justify-content-center align-items-center`}
            onClick={handleClick}
            onKeyPress={(e) => e.key === "Enter" && handleClick()} 
            style={{ cursor: "pointer" }}
          >
            {isSelected ? (
              <BsHeartFill color="red" />
            ) : (
              <BsHeart color="black" />
            )}
          </span>
        </div>
        <div className="row d-flex justify-content-between mt-1">
          <div className="col-6 text-start">R{product.price}</div>
          <button className="btn add-cart-btn" onClick={handleAddToCart}>
            ADD TO CART
          </button>
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
        <div className="toast-body">{toastMessage}</div>
      </div>
    </div>
  );
}

// Prop validation
ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductCard;
