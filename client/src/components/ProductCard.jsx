import PropTypes from "prop-types";
import "../App.css"; // Import the CSS file
import { BsHeart } from "react-icons/bs";

function ProductCard({ product }) {
  return (
    <div className="card">
      <div className="card-body">
        <span className="position-absolute top-25 start-75 translate-middle p-1 border border-light rounded-circle"><BsHeart/></span>
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="row d-flex justify-content-between">
          <div className="col-6">{product.name}</div>
          <div className="col-6 text-end">R{product.price}</div>
        </div>
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
};

export default ProductCard;
