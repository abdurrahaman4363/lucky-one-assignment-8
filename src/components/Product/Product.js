import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
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
                <p className='btn-text'>add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;