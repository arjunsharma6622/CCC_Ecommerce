import React from 'react';
import { Link } from 'react-router-dom';
import './OrderSuccess.css'

const OrderSuccess = () => {
  return (
    <div className="order-success">
      <img src="https://img.freepik.com/free-vector/order-confirmed-concept-illustration_114360-1486.jpg?w=1060&t=st=1693602624~exp=1693603224~hmac=20f5afa5d9b3dbf163e6562c4ba4babfdd5343eade22ab921129950bf687ce1f" alt="" width={"50%"}/>
      <p>Your order has been placed successfully. Thank you for shopping with us!</p>
      <Link to="/dashboard">
        <button className="home-button">Check Your Orders <i class="fa-solid fa-arrow-up-right-from-square" style={{ color: '#ffffff' }}></i></button>
      </Link>
    </div>
  );
};

export default OrderSuccess;
