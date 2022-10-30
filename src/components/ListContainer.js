import React, { useEffect, useState } from 'react'
import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";
import '../App.css'

const ItemList = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        getItems()
    }, [])

const getItems = () => {
    const db = getFirestore()
    const jerseysRef = collection(db, 'jerseys')
    getDocs( jerseysRef ).then(snapshot => {
        const data = snapshot.docs.map( e => ({id: e.id, ...e.data()}))
        console.table(data)
        setItems(data)
    })
}

return (
    <div>
        { items.map( i => 
        <div className="card w-96 shadow-xl">
        <figure className="px-10 pt-10">
            <img src={i.img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">{i.name}</h2>
            <p>${i.price}</p>
            <div className="card-actions">
            <button className="btn btn-dark">Buy Now</button>
            </div>
        </div>
        </div>)}
</div>)}

export default ItemList