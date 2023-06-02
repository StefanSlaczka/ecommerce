import React from 'react'
import "../style/Product.css"

// This is a the product component to make products

const Product = (props) => {
    const {image, title, price, discripstion} = props.product;
    
    return(
        <div className='product'>
            <img src={image} alt={title} className='product-image'></img>
            <h3 className='product-title'>{title}</h3>
            <p className='product-price'>{price}</p>
            <p className='product-discription'>{discripstion}</p>
        </div>
    );
}

export default Product;