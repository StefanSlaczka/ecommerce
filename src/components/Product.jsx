import React, { useState } from "react";
import "../style/Product.css";

// later on add a useEffect to make sure the button is being pressed one's

const Product = (props) => {
  const { image, title, price, discripstion } = props.product;
  const [number, setNumber] = useState(0);

  return (
    <div className='product'>
      <img src={image} alt={title} className='product-image'></img>
      <h3 className='product-title'>{title}</h3>
      <p className='product-price'>{price}</p>
      <p className='product-discription'>{discripstion}</p>
      <div className='buying-form'>
        <button
          className='decrease-button'
          onClick={() => {
            if (number > 0) {
              setNumber(number - 1);
            }
          }}
        >
          -
        </button>
        <h2 className='total'>Total: {number}</h2>
        <button
          className='increase-button'
          onClick={() => setNumber(number + 1)}
        >
          +
        </button>
        <button className='buy-something-else' onClick={() => setNumber(0)}>
          Buy something else
        </button>
      </div>
    </div>
  );
};

export default Product;
