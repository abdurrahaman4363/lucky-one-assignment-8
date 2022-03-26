import React from 'react';
import './Product.css'

const Product = ({handleAddToCart,product}) => {
    // const {handleAddToCart,product}=props;
    const {name,picture,id,price}=product;
       
    return (
        <div className='product'>
            <img src={picture} alt=''></img>
            <div>
            <h3>Name:{name}</h3>
            <h4>Price:{price}</h4>
            <h5>id:{id}</h5>
            </div>
            <button onClick={() =>handleAddToCart(product)} className='btn-cart'>
                <p>add to cart</p>
            </button>
        </div>
    );
};

export default Product;