import React, { useState } from 'react'
import { UseProductsContext } from './CartContext'
import {RiDeleteBin5Fill} from 'react-icons/ri';
import { Link } from 'react-router-dom';
import BasicTextFields from './Form';

const Cart = () => {
    const { CartList, RemoveProduct }  = UseProductsContext()
    const [finalizarCompra, setFinalizarCompra] = useState(0)

    const DeleteItem = (item) => {
        RemoveProduct(item)
    }
    return (
        <div>
            {!finalizarCompra ? 
            <><table>
                    <tbody>
                        {CartList.items.length ?
                            CartList.items.map((item, key) => (
                                <tr key={key} className="cart-dec">
                                    <td>
                                        <div className="px-3 pb-3 font-color"><img src={item.img} alt={item.name} width="100" /></div>
                                    </td>
                                    <td>
                                        <div className="align-middle px-sm-5"><h2 className="lead my-1 font-color">{item.name}</h2></div>
                                    </td>
                                    <td>
                                        <div className="align-middle lead font-color">Cant.{item.cantidad}</div>
                                    </td>
                                    <td>
                                        <div className="px-4"><h2 className="lead my-1 font-color">${item.price}</h2></div>
                                    </td>
                                    <td>
                                        <div className="">
                                            <span>
                                                <div className="p-2 font-color">
                                                    <RiDeleteBin5Fill onClick={() => DeleteItem(item)}></RiDeleteBin5Fill>
                                                </div>
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            ))
                            :
                            <><tr>
                                <td className='font-color'>CART IS EMPTY</td>
                            </tr>
                                </>}
                        {CartList.items.length ?
                            <tr>
                                <td>
                                    <h5 className='mx-3 font-color'>TOTAL</h5>
                                </td>
                                <td className='font-color'>
                                    ${CartList.total.toFixed(2)}
                                </td>
                            </tr> : ''}
                    </tbody>
                </table> 
                <Link to="/">
                    <div> <button className="btn btn-dark btn-color my-1 mx-2 buy" style={{ lineHeight: '0.3rem' }}>CONTINUE BUYING</button></div>
                </Link>
                { CartList.items.length ?
                    <div> <button onClick={()=> setFinalizarCompra(1)} className="btn btn-dark btn-color buy mx-2" style={{ lineHeight: '0.3rem' }}>BUY</button></div> 
                    : ''
                }        </>
                
            : 
            <BasicTextFields items={CartList.items} total={CartList.total.toFixed(2)} /> 
            }
            
        </div>
    )
}


export default Cart;