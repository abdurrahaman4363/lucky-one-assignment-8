import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products,setProducts]=useState([])
    const [cart,setCart]=useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const handleAddToCart=(product)=>{
        console.log(product);
        
    }

    return (
        <div className='shop-container'>
                <div className="products-container">
                   {
                       products.map(product => <Product 
                       key={product.id}
                       product={product}
                       handleAddToCart={handleAddToCart}
                       ></Product>)
                   }
                </div>
                <div className="cart-container">
                  <h3>Selected Bats</h3>
                  <button style={{color:'lawngreen', borderRadius: 5,margin:'2px'}}>CHOOSE ONE FOR ME</button><br />
                  <button style={{color:'fuchsia',borderRadius: 5,margin:'2px'}}>REMOVE</button>
                </div>
        </div>
    );
};

export default Shop;