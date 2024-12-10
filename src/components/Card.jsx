import React from "react";
import "../styles/Card.css"
const Card = ({ items, handleClick}) => {
  return (
    <div className="card_box">
      <div className="images">
        <img src={items.img} alt="image" />
      </div>
      <div className="details">
        <p>{items.title}</p>
        <p>{items.author}</p>
        <p>Price-{items.price}</p>
        <button onClick={()=>{handleClick(items)}}>Add to cart</button>
      </div>
    </div>
  );
};

export default Card;
