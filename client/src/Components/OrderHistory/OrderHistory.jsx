import React from 'react';
import './OrderHistory.css';
import ProgressBar from "@ramonak/react-progress-bar";
import { useSelector } from 'react-redux';


const OrderHistory = () => {



  const orders = useSelector((state) => state.orders.prevOrders);


  const statusObj = { 'Pending' : 4, 'Dispatched': 24, 'On The Way': 50, 'Out For Delivery': 75, 'Delivered': 100 };
  const statusColor = { 'Dispatched': '#00a72c', 'On The Way': 'orange', 'Out For Delivery': 'blue', 'Delivered': '#00a72c' };


  function formatDateToDDMMM(dateString) {
    const options = { day: '2-digit', month: 'short' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  }


  const sortedOrders = orders.slice().sort((a, b) => b.id - a.id);


return (
  <div className="order-history">
    <h2>Order History</h2>
    {orders.length === 0 ? (
      <p>No order history available.</p>
    ) : (
      <ul className="order-list">
        {sortedOrders.map(order => (
          <li key={order.id} className="order-item">

            <div className="order-details">
              <h3>Order #{order.id}</h3>
              <p>Order Placed: {formatDateToDDMMM(order.date)}</p>
              <p>Total Amount: Rs. {order.totalPrice}</p>
            </div>
            <div className="order-status">
              <span style={{ color: statusColor[order.status] }}>{order.status}</span>

              <ProgressBar completed={statusObj[order.status]} height='6px' isLabelVisible={false} bgColor={'green'}/>

              <p>Deliver by {formatDateToDDMMM(order.date + 7)}</p>
            </div>
          </li>
        ))}
      </ul>
    )}
  </div>
);
};

export default OrderHistory;
