import React, { useState } from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { UseProductsContext } from './CartContext'

const ItemDetail = ({item}) => {
    console.log(item)
    const [itemQuantity, setItemQuantity] = useState(1)
    const [seAgregoAlCarrito, setSeAgregarAlCarrito] = useState(false)
    const { AddProduct }  = UseProductsContext()
    const onAdd = (quantityToAdd) => {
        setItemQuantity(quantityToAdd);
    }
    const addToCart= () => {
        setSeAgregarAlCarrito(true)
        AddProduct(item, itemQuantity)
    }

    const agregarAlCarrito = seAgregoAlCarrito ? '' : <div> <button className="btn btn-dark btn-color" style={{lineHeight: '0.3rem'}} onClick={addToCart}>ADD TO CART {itemQuantity} </button></div>
    const irAlCarrito = seAgregoAlCarrito ? <Link to="/cart">
    <div> <button className="btn btn-dark btn-color" style={{lineHeight: '0.3rem'}}>GO TO CART</button></div>
</Link> : '';

    const seguirComprando = seAgregoAlCarrito ? <Link to="/Shop">
    <div> <button className="btn btn-dark btn-color" style={{lineHeight: '0.3rem'}}>CONTINUE BUYING</button></div>
</Link> : '';

    
return (
    
        <div className="shop">
            <div className="">
            <img src={`${item.img}`} alt={item.name} className="img-detail"/>
            </div>
                
            <div className="lead my-1">
                <span className="text-decoration-none d-flex flex-column px-5">
                    <h1 className="text-center font-color">{item.name}</h1>
                    <h3 className="text-center font-color">{item.description}</h3>
                    <h1 className="text-center font-color">${item.price}</h1>
                    <div>
                        <ItemCount stock={10} initial={1} onAdd={onAdd} />
                    </div>
                    <span className="align-self-center py-3">
                        
                    <div className='d-flex justify-content-space-between'>
                        {agregarAlCarrito} 
                        {seguirComprando} 
                        {irAlCarrito}
                    </div>
                    </span>
                </span>
            </div>
        </div>
)
}

export default ItemDetail;