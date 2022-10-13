import React from 'react'
import{Link} from 'react-router-dom'

function Item({product}) {
    return (
        <div className="card w-96 shadow-xl">
<figure className="px-10 pt-10">
    <img src={product.img} alt="Shoes" className="rounded-xl" />
</figure>
<div className="card-body items-center text-center">
    <h2 className="card-title">{product.name}</h2>
    <p>{product.description}</p>
    <div className="card-actions">
    <button className="btn btn-primary">Buy Now</button>
    </div>
</div>
</div>
    )
}

export default Item