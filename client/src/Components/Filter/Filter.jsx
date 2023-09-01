import React, { useState } from 'react';
import './Filter.css';

const Filter = ({ brands, handleFilter }) => {
  const [selectedBrand, setSelectedBrand] = useState('');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });

  const handleBrandChange = (event) => {
    const brand = event.target.value;
    setSelectedBrand(brand);
    handleFilter({ brand, priceRange });
  };

  const handlePriceChange = (event, type) => {
    const updatedPriceRange = { ...priceRange, [type]: event.target.value };
    setPriceRange(updatedPriceRange);
    handleFilter({ brand: selectedBrand, priceRange: updatedPriceRange });
  };

  return (
    <div className="product-filter">
      <h3>Filter Products</h3>
      <div className="filter-section">
        <label htmlFor="brand">Brand:</label>
        <select
          id="brand"
          value={selectedBrand}
          onChange={handleBrandChange}
        >
          <option value="">All Brands</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>
      <div className="filter-section">
        <label htmlFor="minPrice">Min Price:</label>
        <input
          type="number"
          id="minPrice"
          value={priceRange.min}
          onChange={(e) => handlePriceChange(e, 'min')}
        />
      </div>
      <div className="filter-section">
        <label htmlFor="maxPrice">Max Price:</label>
        <input
          type="number"
          id="maxPrice"
          value={priceRange.max}
          onChange={(e) => handlePriceChange(e, 'max')}
        />
      </div>
      {/* Add more filters as needed */}
    </div>
  );
};

export default Filter;
