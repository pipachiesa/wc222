import React from 'react'
import{Link} from 'react-router-dom'


function Item({item}) {
    return (
        <div className="card w-96 shadow-xl">
<figure className="px-10 pt-10">
    <img src={item.img} alt="Shoes" className="rounded-xl" />
</figure>
<div className="card-body items-center text-center">
    <h2 className="card-title">{item.name}</h2>
    <p>{item.description}</p>
    <div className="card-actions">
    <button className="btn btn-primary">Buy Now</button>
    </div>
</div>
</div>


    )
}

export default Item