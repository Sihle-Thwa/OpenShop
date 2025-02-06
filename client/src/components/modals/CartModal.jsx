import PropTypes from "prop-types";
import { useState } from "react";
function CartModal({ onClose, cart }) {

  const initialQty = cart.reduce((acc, item) => {
    acc[item.id] = 1;
    return acc;
  }, {});
  // Function to calculate the total price of items in the cart
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price *qty[item.id]), 0).toFixed(2);
  };

  //Function to increase and decrease qty of product added to cart
  const [qty, setQty] = useState(initialQty);

  const increaseQty = (itemID) => {
    setQty((prevQty) => ({
      ...prevQty,
      [itemID]: prevQty[itemID] + 1,
    }));
  };

  const decreaseQty = (itemId) => {
    setQty((prevQty) => ({
      ...prevQty,
      [itemId]: Math.max(1,prevQty[itemId] - 1),
    }));
  };

  return (
    <div
      className="modal fade show"
      style={{ display: "block" }} // Ensure the modal is visible
      tabIndex="-1"
      aria-labelledby="cartModalLabel"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="cartModalLabel">
              Cart
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <table className="table">
              <thead>
                <tr>
                  <th>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                    </div>
                  </th>
                  <th>PRODUCT</th>
                  <th>QUANTITY</th>
                  <th>PRICE</th>
                </tr>
              </thead>
              <tbody>
                {cart.length > 0 ? (
                  cart.map((item) => (
                    <tr key={item.id}>
                      <td className="justify-content-left">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                        </div>
                      </td>
                      <td className="row">
                        <div className="col">
                          <img
                            className="cart-image"
                            src={item.image}
                            alt={item.name}
                          />
                        </div>
                        <div className="col">{item.name}</div>
                      </td>
                      <td>
                        <div
                          className="btn-group btn-group-sm"
                          role="group"
                          aria-label="Small button group"
                        >
                          <button
                            type="button"
                            className="btn btn-outline-secondary border-end-0"
                            onClick={() => decreaseQty(item.id)}
                          >
                            -
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-secondary border-start-0 border-end-0 disabled fw-bold"
                          >
                            {qty[item.id]}
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-secondary border-start-0"
                            onClick={() => increaseQty(item.id)}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td>R{item.price.toFixed(2) * qty[item.id]}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4">Your cart is empty.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="modal-footer">
            {cart.length > 0 && (
              <div className="w-100 text-end">
                <strong>Total: R{calculateTotal()}</strong>
              </div>
            )}
            
            <button type="button" className="btn add-cart-btn">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

CartModal.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string,
    })
  ),
  onClose: PropTypes.func.isRequired,
};

export default CartModal;
