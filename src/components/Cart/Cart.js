import React from 'react';
import Product from '../Product/Product';
import SelectOne from '../SelectOne/SelectOne';
import './Cart.css';

const Cart = ({cart,removeCartName,chooseOneItem}) => {
let productName = cart.map(product =>product.name)
    return (
        <div className='cart'>
                <h3>Selected Bats</h3>
                  
                 {
                     productName.map(name => <h4>{name}</h4>)
                 }
                 
                  <button onClick={chooseOneItem} style={{color:'blue', borderRadius: 5,margin:'5px'}}>CHOOSE ONE FOR ME</button><br />
                  <button onClick={removeCartName} style={{color:'fuchsia',borderRadius: 5,margin:'5px'}}>REMOVE</button>

                  <h1>{}</h1>
        </div>
    );
};

export default Cart;