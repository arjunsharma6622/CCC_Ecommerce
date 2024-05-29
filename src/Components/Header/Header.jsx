import React from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const location = useLocation();
  const items = useSelector((state) => state.cart.items);
  const itemCount = items.length;

  // Define a function to check if the current pathname matches a given path
  const isCurrentPage = (path) => location.pathname === path;

  return (
    <header className="header">
      <Link to="/">
        <div className="logo">ECOMMERCE</div>
      </Link>

      <div className='user-actions-left'>
        <span>Men</span>
        <span>Women</span>
        <span>Kids</span>
        <span>Beauty</span>
        <span>Accessories</span>
      </div>

      <div className="user-actions">
        <Link to="/products">
          <div className={`user-item`}>
            <i class="fa-solid fa-table-cells-large"></i>
            <span className={`${isCurrentPage('/products') ? 'pink-text' : ''}`}>Products</span>
          </div>
        </Link>
        <Link to="/cart">
          <div className={`user-item`}>
            <div className="cart-icon">
              {itemCount !== 0 ? (
                <div className="item-count">{itemCount}</div>
              ) : (
                ''
              )}
              <i class="fa-solid fa-cart-shopping"></i>
            </div>
            <span className={`${isCurrentPage('/cart') ? 'pink-text' : ''}`}>Cart</span>
          </div>
        </Link>
        <Link to="/dashboard">
          <div className={`user-item`}>
            <i class="fa-solid fa-user"></i>
            <span className={`${isCurrentPage('/dashboard') ? 'pink-text' : ''}`}>User</span>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
