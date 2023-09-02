import React, { useState } from 'react';
import './ProductList.css';
import ProductCard from '../../Components/ProductCard/ProductCard';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const ProductList = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [cart, setCart] = useState([]); // State for the cart
  const [selectedBrand, setSelectedBrand] = useState('');
  const [priceRange, setPriceRange] = useState({ min: '0', max: '10000' });

  const [searchQuery, setSearchQuery] = useState('');

  const handleFilter = () => {
    // Filter by brand
    const brandFiltered = selectedBrand
      ? products.filter(product => product.brand === selectedBrand)
      : products;

    // Filter by price range
    const minPrice = parseInt(priceRange.min);
    const maxPrice = parseInt(priceRange.max);
    const priceFiltered = minPrice && maxPrice
      ? brandFiltered.filter(product => product.price >= minPrice && product.price <= maxPrice)
      : brandFiltered;

    // Filter by search query
    const searchFiltered = searchQuery
      ? priceFiltered.filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase()))
      : priceFiltered



    setFilteredProducts(searchFiltered);
  };


  console.log(filteredProducts)

  const handleAddToCart = (productId) => {
    const productToAdd = products.find(product => product.id === productId);
    setCart([...cart, productToAdd]);
  };

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
  };

  const handlePriceChange = (value, type) => {
    const updatedPriceRange = { ...priceRange, [type]: value };
    setPriceRange(updatedPriceRange);
  };

  // Call handleFilter whenever the filters change
  React.useEffect(() => {
    handleFilter();
  }, [selectedBrand, priceRange, searchQuery]);

  return (
    <div className="product-list-page">
      <h2>Discover Our Products</h2>
      <div className="product-list-wrapper">
        <div className="product-filter">
          <h3>Filter Products</h3>

          <div className="filter-section">
            <label htmlFor="search">Search:</label>
            {/* <input
            type="text"
            id="search"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          /> */}

            <div className="search-bar">
              {/* <button className="search-button"> */}
              <i className="fas fa-search" style={{ color: 'gray' ,marginLeft:'10px' }}></i>
              {/* </button> */}
              <input type="text"
                id="search"
                placeholder='CK Shirts'
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)} />

            </div>
          </div>
          <div className="filter-section">
            <label htmlFor="brand">Brand:</label>
            <select
              id="brand"
              value={selectedBrand}
              onChange={handleBrandChange}
            >
              <option value="">All Brands</option>
              {["Nike", "Adidas", "Puma", "Van Heusen", "CK", "LV"].map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>
          <div className="filter-section">
            <label htmlFor="minPrice">Min Price:</label>
            <Slider
              trackStyle={{ backgroundColor: '#FF3F6B' }}
              handleStyle={{
                borderColor: "#FF3F6B",
                backgroundColor: "#FF3F6B",
                boxShadow: "0 0 6px rgba(255, 63, 107, 0.6)"
              }}

              min={0}
              max={10000} // Set your desired max price here
              value={parseInt(priceRange.min)}
              onChange={(value) => handlePriceChange(value, 'min')}
            />
            <span>{parseInt(priceRange.min)}</span>
          </div>
          <div className="filter-section">
            <label htmlFor="maxPrice">Max Price:</label>
            <Slider
              trackStyle={{ backgroundColor: '#FF3F6B' }}
              handleStyle={{
                borderColor: "#FF3F6B",
                backgroundColor: "#FF3F6B",
                boxShadow: "0 0 6px rgba(255, 63, 107, 0.6)"
              }}
              min={0}
              max={10000} // Set your desired max price here
              value={parseInt(priceRange.max)}
              onChange={(value) => handlePriceChange(value, 'max')}
            />
            <span>{parseInt(priceRange.max)}</span>
          </div>

        </div>
        <div className="product-grid">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={() => handleAddToCart(product.id)} // Pass the add to cart handler
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
