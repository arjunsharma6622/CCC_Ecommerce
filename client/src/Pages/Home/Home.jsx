import React from 'react';
import './Home.css';
import ProductCard from '../../Components/ProductCard/ProductCard';

const Home = ({ featuredProducts }) => {
  return (
    <div className="home">
      <div className="banner">
        {/* <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/homepage_xXnVQpm.jpg?format=webp&w=1440&dpr=2.0" alt="" /> */}
        <img src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/category/catban-020230826113355.jpg?format=webp&w=1440&dpr=2.0" alt="" />
      </div>

      {/* <h2>Welcome to Our Sustainable Fashion Store!</h2>
      <p>Discover eco-friendly clothing and accessories for a greener future.</p> */}

      <div className="featured-products">
        <h3>Featured Products</h3>
        <div className="product-list">
          {featuredProducts.map(product => (
            <ProductCard product={product}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
