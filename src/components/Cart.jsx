// Cart.js

import React from "react";
import "../styles/Cart.css"
const Cart = ({ cart, setCart }) => {

  // Function to handle increase in quantity
  const handleIncrease = (itemId) => {
    setCart(cart.map(item =>
      item.id === itemId ? { ...item, amount: item.amount + 1 } : item
    ));
  };

  // Function to handle decrease in quantity
  const handleDecrease = (itemId) => {
    setCart(cart.map(item =>
      item.id === itemId && item.amount > 1
        ? { ...item, amount: item.amount - 1 }
        : item
    ));
  };

  // Calculate total price for all items
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.amount, 0);

  return (
    <div>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart_images">
                <img src={item.img} alt={item.title} />
                <div className="cart_details">
                  <p>{item.title}</p>
                  <p>{item.author}</p>
                  <p>Price: ₹{item.price}</p>
                  <p>Quantity: {item.amount}</p>
                </div>

                {/* Quantity Control Buttons */}
                <button onClick={() => handleIncrease(item.id)}>+</button>
                <button onClick={() => handleDecrease(item.id)}>-</button>
              </div>
              
              {/* Total Price for this item */}
              <div className="total_price">
                <p>Total Price: ₹{item.price * item.amount}</p>
              </div>
            </div>
          ))}

          {/* Final Total Price for all items */}
          <div className="final-total">
            <h3>Final Total Price: ₹{totalPrice}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
