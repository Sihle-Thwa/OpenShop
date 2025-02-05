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
            <table className="table">
              <thead >
                <tr>
                  <th><div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
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
                    <td className="justify-content-left"><div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    </div></td>
                    <td className="row">
                       <div className="col">
                       <img className="cart-image" src={item.image} alt={item.name}/>
                       </div>
                       <div className="col">
                       {item.name} 
                        </div>
                       
                       </td>
                    <td>1</td>
                    <td>R{item.price.toFixed(2)}</td>
                  </tr>
                ))
                ):(
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
