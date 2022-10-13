import React from 'react';
import {FaShoppingCart} from 'react-icons/fa';
const CartWidget = () => {

return (
    <div>
    <a href="#my-modal-2" className="bg-rose-800">
        <FaShoppingCart/>
    </a>

    <div className="modal" id="my-modal-2">
    <div className="modal-box bg-rose-800">
        <h3 className="font-bold text-lg">MY CART</h3>
        <p className="py-4">Add Products.</p>
        <div className="modal-action">
        <a href="#" className="btn checkout">PROCEED TO CHECKOUT</a>
        </div>
    </div>
    </div>
    </div>
);
};

export default CartWidget;