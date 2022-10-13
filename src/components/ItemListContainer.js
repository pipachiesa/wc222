import React, { useEffect, useState } from 'react'
import Item from './Item';


function ItemListContainer() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
    const promise = fetch("https://63431cdcba4478d478488a41.mockapi.io/api/v1/products");

    promise
        .then((res) => res.json())
        .then((res) => {
        setProducts(res);
        })
    }, []);
return (
    <div>
        <h1 className='font-bold shop-title'>SHOP</h1>
        <div style={{display: 'flex'}}>
            {products.map((product, key) => (
            <Item product={product} key={key} />
            ))}
        </div>
    </div>
)
}   


export default ItemListContainer