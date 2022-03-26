import React from 'react';
import Product from '../Product/Product';
import './Cart.css'

const Cart = ({cart}) => {
const productName = cart.map(product =>product.name)
// console.log(productName);
    return (
        <div className='cart'>
                <h3>Selected Bats</h3>
                  
                 {
                     productName.map(name => <h4>{name}</h4>)
                 }
                 
                  <button style={{color:'blue', borderRadius: 5,margin:'5px'}}>CHOOSE ONE FOR ME</button><br />
                  <button style={{color:'fuchsia',borderRadius: 5,margin:'5px'}}>REMOVE</button>
        </div>
    );
};

export default Cart;