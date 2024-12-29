import PropTypes from "prop-types";
import { useState } from "react";
import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";

const FilterComponent = ({ products, onFilterChange }) => {
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [size, setSize] = useState([]);

  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isSubCategoryOpen, setIsSubCategoryOpen] = useState(false);
  const [isSizeOpen, setIsSizeOpen] = useState(false);

  const handleFilterChange = () => {
    const filters = {
      category: category.length > 0 ? category : undefined,
      subCategory: subCategory.length > 0 ? subCategory : undefined,
      size: size.length > 0 ? size : undefined,
    };
    onFilterChange(filters);
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

  const renderFilterSection = (
    title,
    items,
    state,
    setState,
    isOpen,
    setIsOpen
  ) => (
    <div>
      <h6
        onClick={() => setIsOpen(!isOpen)}
        style={{ cursor: "pointer" }}
        className="d-flex align-items-center"
      >
        {title}
        <span className="ms-2">
          {isOpen ? <BsArrowUpShort /> : <BsArrowDownShort />}
        </span>
      </h6>
      {isOpen && (
        <ul className="list-unstyled">
          {items.map((item) => (
            <li className="mb-1" key={item}>
              <label className="d-flex align-items-center">
                <input
                  type="checkbox"
                  value={item}
                  checked={state.includes(item)}
                  onChange={(e) => {
                    const newState = e.target.checked
                      ? [...state, item]
                      : state.filter((s) => s !== item);
                    setState(newState);
                    handleFilterChange();
                  }}
                  className="me-2"
                />
                {item}
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <div className="card border-0 d-flex">
      <div className="card-body">
        <h5 className="d-flex align-items-center">Filter Options</h5>
        <div>
          {renderFilterSection(
            "Categories",
            uniqueCategories,
            category,
            setCategory,
            isCategoryOpen,
            setIsCategoryOpen
          )}
          {renderFilterSection(
            "Subcategories",
            uniqueSubcategories,
            subCategory,
            setSubCategory,
            isSubCategoryOpen,
            setIsSubCategoryOpen
          )}
          {renderFilterSection(
            "Sizes",
            uniqueSizes,
            size,
            setSize,
            isSizeOpen,
            setIsSizeOpen
          )}
        </div>
      </div>
    </div>
  );
};

FilterComponent.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      subCategory: PropTypes.string.isRequired,
      sizes: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default FilterComponent;
