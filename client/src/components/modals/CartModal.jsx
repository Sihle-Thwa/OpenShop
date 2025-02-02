import PropTypes from "prop-types";
import { BsTrash } from "react-icons/bs";

function CartModal({ onClose, cart }) {
  // Function to calculate the total price of items in the cart
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
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
            {cart.length > 0 ? (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="row d-flex justify-content-between align-items-center"
                >
                  <div className="col-2 pb-1">
                    <img className="cart-image" src={item.image} alt={item.name}/>
                  </div>
                  <div className="col-8">
                    <div className="row fw-bold">{item.name}</div>
                    <div className="row"> Quantity: 1</div>
                    <div className="row d-flex align-items-end">R{item.price.toFixed(2)}</div>{" "}
                    {/* Format price to 2 decimal places */}{" "}
                  </div>

                  <button className="btn btn-danger btn-sm ms-2">
                    <BsTrash />
                  </button>
                </div>
              ))
            ) : (
              <div>Your cart is empty.</div>
            )}
          </div>
          <div className="modal-footer">
            {cart.length > 0 && (
              <div className="w-100 text-end">
                <strong>Total: R{calculateTotal()}</strong>
              </div>
            )}
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
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
