import PropTypes from 'prop-types';
import  { useState } from 'react';

const FilterComponent = ({ products, onFilterChange }) => {
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [size, setSize] = useState('');

  const handleFilterChange = () => {
    onFilterChange({ category, subCategory, size });
  };

  const uniqueCategories = [...new Set(products.map(product => product.category))];
  const uniqueSubcategories = [...new Set(products.map(product => product.subCategory))];
  const uniqueSizes = [...new Set(products.flatMap(product => product.sizes))];

  return (
    <div className="card">
      <div className="card-body">
        <h5>Filter Options</h5>

        <select id="category" value={category} onChange={(e) => { setCategory(e.target.value); handleFilterChange(); }}>
          <option value="">All Categories</option>
          {uniqueCategories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <select id="subCategory" value={subCategory} onChange={(e) => { setSubCategory(e.target.value); handleFilterChange(); }}>
          <option value="">All Subcategories</option>
          {uniqueSubcategories.map((subCat) => (
            <option key={subCat} value={subCat}>{subCat}</option>
          ))}
        </select>

        <select id="size" value={size} onChange={(e) => { setSize(e.target.value); handleFilterChange(); }}>
          <option value="">All Sizes</option>
          {uniqueSizes.map((sz) => (
            <option key={sz} value={sz}>{sz}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

FilterComponent.propTypes = {
    products: PropTypes.array.isRequired,
    onFilterChange: PropTypes.func.isRequired
}


;

export default FilterComponent;