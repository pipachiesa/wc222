import React from 'react';
import {FaShoppingCart} from 'react-icons/fa';
import Cart from './Cart';
const CartWidget = () => {

return (
    <div>
    <a href="cart" className="bg-rose-800">
    <FaShoppingCart>
        <Cart></Cart>
    </FaShoppingCart>
    </a>
    </div>
);
};

export default CartWidget;