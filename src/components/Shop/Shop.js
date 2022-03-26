import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import SelectOne from '../SelectOne/SelectOne';

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
        // console.log(product);
        const newCart = [...cart,product];
        setCart(newCart);
    }
    const removeCartName  =()=> {
        setCart([])
        
        
    }

       const [name,setName]=useState([])
   
    const chooseOneItem = () =>{
        
        const names = cart.map(product=>product.name)
        console.log(names.length);
        const x = Math.floor(Math.random()*(names.length-1));
        let newName = names[x];
        setName(newName);
        console.log(newName)
        console.log(x)

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
                  <Cart cart={cart} 
                  removeCartName={removeCartName}
                  chooseOneItem={chooseOneItem}
                  ></Cart>

                    <h1>{name}</h1>
                </div>
        </div>
    );
};

export default Shop;