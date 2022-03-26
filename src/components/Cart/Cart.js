import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
                <h3>Selected Bats</h3>
                  <p>selected items:{cart.length}</p>
                  <button style={{color:'lawngreen', borderRadius: 5,margin:'2px'}}>CHOOSE ONE FOR ME</button><br />
                  <button style={{color:'fuchsia',borderRadius: 5,margin:'2px'}}>REMOVE</button>
        </div>
    );
};

export default Cart;