import React, { useState } from "react";
import ProductCard from "../components/ProductCard"; // Adjust the path as necessary
import { products } from "../assets/products"; // Adjust the path as necessary

function Collection() {
  const itemsPerPage = 9; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1); // State for current page

  // Calculate the total number of pages
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Calculate the index of the first and last item on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Get the current items to display
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container">
      <div className="row">
        {/* Filter Section */}
        <div className="col-md-3 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Filter Options</h5>
              {/* Add your filtering options here */}
              <div>
                <h6>Category</h6>
                <div>
                  <input type="checkbox" id="category1" />
                  <label htmlFor="category1"> Category 1</label>
                </div>
                <div>
                  <input type="checkbox" id="category2" />
                  <label htmlFor="category2"> Category 2</label>
                </div>
                {/* Add more filter options as needed */}
              </div>
            </div>
          </div>
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
