import React, { useEffect, useState } from 'react';
import './ShoppingCart.css';
import { useSelector, useDispatch } from 'react-redux';
import { emptyCart, removeFromCart, updateQuantity } from '../../cartSlice'; // You'll need to import your action creators here
import { Link, Navigate } from 'react-router-dom';
import { addToPreviousOrders } from '../../orderSlice';

const ShoppingCart = () => {


  const [orderDetails, setOrderDetails] = useState({});



  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.items);
  const prevOrders = useSelector((state) => state.orders.prevOrders);



  const handleQuantityChange = (productId, newQuantity) => {
    dispatch(updateQuantity({ productId, newQuantity }));
  };

  const handleDeleteItem = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const calculateTotalPrice = () => {
    var total = 0;
    cart.forEach((item) => {
      var price = item.price
      var qty = item.quantity
      total += item.price * item.quantity;
    })

    return total
  };

  useEffect(() => {
    const handleOrderDetails = async () => {
      setOrderDetails({
        totalItems : await cart.length,
        totalPrice : calculateTotalPrice(),
        status : 'Pending',
        date : new Date(),
        id : await prevOrders.length === 0 ? 1 : prevOrders.length + 1
      })
  
    }
    handleOrderDetails();
  }, [cart]);



  const handleCheckout = () => {
    dispatch(addToPreviousOrders(orderDetails));
    dispatch(emptyCart());
  }

  return (
    <div className="shopping-cart">
      <h2>Your Shopping Cart</h2>
      
      {cart.length === 0 ? (
        <div className="empty-cart">
        
        <img src="./empty-cart.png" alt="" width={'30%'}/>
        <p>Your cart feels so light...</p>

        <Link to={'/products'}>
        <button className='products-button'>Products <i class="fa-solid fa-arrow-up-right-from-square" style={{color:'#ffffff'}}></i></button>
        </Link>

        </div>
      ) : (
        <div className='cart-items-wrapper'>
          
          <ul className="cart-items">
            {cart.map(item => {
              const { id, name, originalPrice, price, image, description, quantity } = item;
              const off = Math.round((originalPrice - price) / originalPrice * 100);

              return (
                <li key={item.id} className="cart-item">
                  <div className="item-details">
                    <img src={image} alt={name} />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <p className='product-name'>{name}</p>
                      <p className="product-description">{description}</p>
                      <p className="product-price">₹ {price} <span className='product-originalPrice'>₹ {originalPrice}</span> <span className='product-offer'>({off}% OFF)</span> </p>
                      <div className="item-quantity">
                        <label>Quantity</label>
                        <select
                          value={quantity}
                          onChange={(e) =>
                            handleQuantityChange(id, parseInt(e.target.value))
                          }
                        >
                          {Array.from({ length: 6 }, (_, index) => index + 1).map(value => (
                            <option key={value} value={value}>{value}</option>
                          ))}
                        </select>
                      </div>

                      <p style={{ fontSize: '12px', color: 'gray', fontSize: '11px' }}><span style={{ fontWeight: '500', color: 'black', fontSize: '12px' }}><i class="fa-solid fa-rotate-left"></i> 14 days</span> return available</p>
                    </div>
                  </div>
                  <div className='cart-product-right'>

                    <button className="delete-button" onClick={() => handleDeleteItem(item.id)}>
                      <i class="fa-solid fa-x"></i>
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="cart-total">

            <p>Order Summary <span>({(cart.length)} Items)</span></p>

            <div className="summary-item">
            <p>Total MRP </p>
            <span> ₹ {calculateTotalPrice()}</span>
            </div>
            <div className="summary-item">
            <p>Discount on MRP </p>
            <span style={{ color: '#4BB59A' }}>-₹ {calculateTotalPrice()}</span>
            </div>
            <div className="summary-item">
            <p>Coupon Discount</p>
            <span style={{ color: '#FF3F6B', fontSize: '12px' }}>Apply Coupon</span>
            </div>
            <div className="summary-item">
            <p>Convinence Fee</p>
            <span> ₹ {calculateTotalPrice()}</span>
            </div>

            <hr width="100%" />

            <div className="summary-item final-price">
            <p>Total Amount</p>
            <span> ₹ {calculateTotalPrice()}</span>
            </div>

            <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
