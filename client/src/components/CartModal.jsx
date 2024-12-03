import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
function CartModal({ onClose, cartItems }) {
  return (
    <div
      className="modal fade show"
      style={{ display: 'block' }} // Ensure the modal is visible
      tabIndex="-1"
      aria-labelledby="cartModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="cartModalLabel">Cart</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div key={item.id} className="d-flex justify-content-between">
                  <div>{item.name}</div>
                  <div>Quantity: {item.quantity}</div>
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
  onClose: PropTypes.func.isRequired,
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default CartModal;
