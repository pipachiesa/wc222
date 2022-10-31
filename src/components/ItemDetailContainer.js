import React, { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import ItemDetail from "./ItemDetail"
import { doc, getDoc, getFirestore } from "firebase/firestore";


const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    let {id} = useParams()

const getItemDetail = async (itemId) => {
    const db = getFirestore()
    const docRef = doc(db, "jerseys", `${itemId}`);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            setItem({id: docSnap.id, ...docSnap.data()})
            console.log(item)
        } 
}

    useEffect(() => {
        getItemDetail(id);      
    }, [id]);

    

    return (
    < div className="text-light mb-4 image__zoom d-flex justify-content-center" >
        < ItemDetail item={item} />
    </div>
    )
}

export default ItemDetailContainer;