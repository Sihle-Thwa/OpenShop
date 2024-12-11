import { useParams } from "react-router-dom";
import { products } from "../assets/products.js"; // Adjust the path as necessary
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { useState } from "react";
import PropTypes from "prop-types";
import ProductCard from "../components/ProductCard.jsx";

function ProductPage({ setCart }) {
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

  const handleCartUpdate = () => {
    // Set the toast message based on whether the product was added or removed
    setCart((prev) => {
      const isProductInCart = prev.some((item) => item.id === product.id);
      const updatedCartList = isProductInCart
        ? prev.filter((item) => item.id !== product.id)
        : [
            ...prev,
            { id: product.id, name: product.name, price: product.price },
          ];
      localStorage.setItem("cart", JSON.stringify(updatedCartList));
      setToastMessage(
        `${product.name} has been ${
          isProductInCart ? "removed from" : "added to"
        } your cart`
      );
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
      return updatedCartList;
    });
    setShowToast(true);

    // Hide the toast message after 3 seconds
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

  const uniqueSizes = [...new Set(products.flatMap((item) => item.sizes))];

  //Get Products in the same category for related products
  const getProductsByCategory = (category) => {
    return products.filter(
      (item) => item.category === category && item.id !== productId
    );
  };

  const relatedProducts = getProductsByCategory(product.category);

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
              <button className="add-cart-btn w-100" onClick={handleCartUpdate}>
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

        <div className="row  p-1">
          <h3>Related Products</h3>
          <div className="d-flex md-4 sm-2   related-products">
            {relatedProducts.length > 0 ? (
              relatedProducts.map((item) => (
                <div key={item.id} className="">
                  <ProductCard product={item} />
                </div>
              ))
            ) : (
              <p>No related products found</p>
            )}
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
        <div className=" toast-header justify-content-between">
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

ProductPage.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ),
  setCart: PropTypes.func,
};

export default ProductPage;
