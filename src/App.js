// App.js

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);
  const [show, setShow] = useState(true);

  const handleClick = (items) => {
    let isPresent = false;

    // Check if the item is already in the cart
    cart.forEach((product) => {
      if (product.id === items.id) {
        isPresent = true;
      }
    });

    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }

    // Add item to the cart with an initial quantity of 1
    setCart([...cart, { ...items, amount: 1 }]);
  };

  return (
    <div>
      <Navbar size={cart.length} setShow={setShow} />
      {show ? (
        <Shop handleClick={handleClick} />
      ) : (
        <div className="cart">
          {/* Make sure to pass setCart as a prop */}
          <Cart cart={cart} setCart={setCart} />
        </div>
      )}
      {warning && <div className="warning">Item already present</div>}
    </div>
  );
}

export default App;
