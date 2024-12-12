import PropTypes from "prop-types";
import { useState } from "react";
import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";

const FilterComponent = ({ products, onFilterChange }) => {
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [size, setSize] = useState("");

  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isSubCategoryOpen, setIsSubCategoryOpen] = useState(false);
  const [isSizeOpen, setIsSizeOpen] = useState(false);

  const handleFilterChange = () => {
    onFilterChange({ category, subCategory, size });
  };

  const uniqueCategories = [
    ...new Set(products.map((product) => product.category)),
  ];
  const uniqueSubcategories = [
    ...new Set(products.map((product) => product.subCategory)),
  ];
  const uniqueSizes = [
    ...new Set(products.flatMap((product) => product.sizes)),
  ];

  return (
    <div className="card border-0 d-flex ">
      <div className="card-body ">
        <h5 className="d-flex align-items-center">Filter Options</h5>
        <div>
          <div>
            <h6
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              style={{ cursor: "pointer" }}
              className="d-flex align-items-center"
            >
              Categories
              <span>
                {" "}
                <BsArrowDownShort />
              </span>
            </h6>
            {isCategoryOpen && (
              <ul className="list-unstyled">
                {uniqueCategories.map((cat) => (
                  <li className="mb-1" key={cat}>
                    <label className="d-flex align-items-center">
                      <input
                        type="checkbox"
                        value={cat}
                        checked={category.includes(cat)}
                        onChange={(e) => {
                          const newCategory = e.target.checked
                            ? [...category, cat]
                            : category.filter((c) => c !== cat);
                          setCategory(newCategory);
                          handleFilterChange();
                        }}
                        className="me-2" // Add margin to the right of the checkbox
                      />
                      {cat}
                    </label>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div>
            <h6
              onClick={() => setIsSubCategoryOpen(!isSubCategoryOpen)}
              style={{ cursor: "pointer" }}
              className="d-flex align-items-center"
            >
              Subcategories
              <span>
                {" "}
                <BsArrowDownShort />
              </span>
            </h6>

            {isSubCategoryOpen && (
              <ul className="list-unstyled">
                {uniqueSubcategories.map((subCat) => (
                  <li className="mb-1" key={subCat}>
                    <label label className="d-flex align-items-center">
                      <input
                        type="checkbox"
                        value={subCat}
                        checked={subCategory.includes(subCat)}
                        onChange={(e) => {
                          const newSubCategory = e.target.checked
                            ? [...subCategory, subCat]
                            : subCategory.filter((s) => s !== subCat);
                          setSubCategory(newSubCategory);
                          handleFilterChange();
                        }}
                        className="me-2"
                      />
                      {subCat}
                    </label>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div>
            <h6
              onClick={() => setIsSizeOpen(!isSizeOpen)}
              style={{ cursor: "pointer" }}
              className="d-flex align-items-center"
            >
              Sizes
              <span className="d-flex text-align-right">
                {isCategoryOpen ? <BsArrowUpShort /> : <BsArrowDownShort />}
              </span>
            </h6>
            {isSizeOpen && (
              <ul className="list-unstyled">
                {uniqueSizes.map((sz) => (
                  <li className="mb-1" key={sz}>
                    <label className="d-flex align-items-center">
                      <input
                        type="checkbox"
                        value={sz}
                        checked={size.includes(sz)}
                        onChange={(e) => {
                          const newSize = e.target.checked
                            ? [...size, sz]
                            : size.filter((s) => s !== sz);
                          setSize(newSize);
                          handleFilterChange();
                        }}
                        className="me-2"
                      />
                      {sz}
                    </label>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

FilterComponent.propTypes = {
  products: PropTypes.array.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default FilterComponent;
