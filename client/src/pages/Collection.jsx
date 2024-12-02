import { useState } from "react";
import ProductCard from "../components/ProductCard"; // Adjust the path as necessary
import { products } from "../assets/products"; // Adjust the path as necessary
import FilterComponent from "../components/FilterComponent"; // Import the FilterComponent

function Collection() {
  const itemsPerPage = 9; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const [filteredProducts, setFilteredProducts] = useState(products); // State for filtered products

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  // Calculate the index of the first and last item on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Get the current items to display
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Function to handle filter changes
  const handleFilterChange = (filters) => {
    const { category, subCategory, size } = filters;

    const filtered = products.filter(product => {
      const matchesCategory = category ? product.category === category : true;
      const matchesSubCategory = subCategory ? product.subCategory === subCategory : true;
      const matchesSize = size ? product.sizes.includes(size) : true;

      return matchesCategory && matchesSubCategory && matchesSize;
    });

    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  };

  return (
    <div className="container">
      <div className="row">
        {/* Filter Section */}
        <div className="col-md-3 mb-4">
          <FilterComponent products={products} onFilterChange={handleFilterChange} />
        </div>

        {/* Products Section */}
        <div className="col-md-9">
          <div className="row">
            {currentItems.map((product) => (
              <div className="col-md-4 mb-4" key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center">
              {Array.from({ length: totalPages }, (_, index) => (
                <li
                  className={`page-item ${
                    currentPage === index + 1 ? "active" : ""
                  }`}
                  key={index}
                >
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Collection;