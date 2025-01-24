import { useState } from "react";
import PropTypes from "prop-types";
import ProductCard from "../components/ProductCard"; 
import { products } from "../assets/products"; 
import FilterComponent from "../components/FilterComponent"; 

function Collection({ onAddToCart }) {
  const itemsPerPage = 9; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const [filteredProducts, setFilteredProducts] = useState(products); // State for filtered products

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

// Calculate the index of the first and last item on the current page
const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // Get the current items to display
  const currentItems = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Function to handle filter changes
  const handleFilterChange = (filters) => {
    const { category, subCategory, size } = filters;

    const filtered = products.filter((product) => {
      const matchesCategory = category ? category.includes(product.category) : true;
      const matchesSubCategory = subCategory ? subCategory.includes(product.subCategory) : true;
      const matchesSize = size ? size.some(s => product.sizes.includes(s)) : true;

      return matchesCategory && matchesSubCategory && matchesSize;
    });

    setFilteredProducts(filtered);
    setCurrentPage(1); 
  };

  return (
    <div className ="container">
      <div className="row">
        {/* Filter Section */}
        <div className="col-lg-3 col-md-4 mb-4">
          <FilterComponent
            products={products}
            onFilterChange={handleFilterChange}
          />
        </div>

        {/* Products Section */}
        <div className="col-lg-9 col-md-8 mb-1">
          <div className="row">
            {currentItems.map((product) => (
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={product.id}>
                <ProductCard product={product} onAddToCart={onAddToCart} />
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <nav aria-label="Page navigation">
    <ul className="pagination justify-content-center">
      {/* Previous Button */}
      <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
        <button
          className="page-link bg-white text-black"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &laquo; 
        </button>
      </li>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, index) => (
        <li
          className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
          key={index}
        >
          <button
            className={`page-link ${
              currentPage === index + 1 ? "bg-black text-white" : "bg-white text-black"
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        </li>
      ))}

      {/* Next Button */}
      <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
        <button
          className="page-link bg-white text-black"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
           &raquo;
        </button>
      </li>
    </ul>

    {/* Current Page and Total Pages Display */}
    <div className="text-center mt-2">
      <span className="text-black">
        Page {currentPage} of {totalPages}
      </span>
    </div>
  </nav>
        </div>
      </div>
    </div>
    
  );
}

Collection.propTypes = {
  onAddToCart: PropTypes.func.isRequired,
};
export default Collection;

