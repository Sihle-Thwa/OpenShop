import PropTypes from "prop-types";
import { BsTrash } from "react-icons/bs";

function CartModal({ onClose, cart }) {
  // Create a function to handle item removal from the cart

  return (
    <div
      className="modal fade show"
      style={{ display: "block" }} // Ensure the modal is visible
      tabIndex="-1"
      aria-labelledby="cartModalLabel"
      aria-hidden="true"
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
                  className="d-flex justify-content-between align-items-center"
                >
                  <div>{item.name}</div>
                  <div>Quantity: 1</div>{" "}
                  {/* Assuming quantity is always 1 for simplicity */}
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
    })
  ).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CartModal;
