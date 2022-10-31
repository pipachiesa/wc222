import React, { useState } from 'react'

const ItemCount = ({stock, initial, onAdd}) => {
    const [counter, setCounter] = useState(parseInt(initial));
    

    const CounterUp = () => {
    if (counter < stock) {
        setCounter(counter + 1)
        onAdd(counter + 1)
    }
}

    const CounterDown = () => {
    if (counter > 1) {
        setCounter(counter - 1)
        onAdd(counter - 1)
    }
}
    

return (
    <div className='d-flex flex-column m-5'>
        <div className='d-flex justify-content-center'>
            <button className='int__button align-self-center py-3 font-color' onClick={CounterUp}>+</button>
                <p className='text-center align-self-center m-3 fs-5 font-color'><strong>QUANTITY: {counter}</strong></p>
            <button className='int__button align-self-center py-3 font-color' onClick={CounterDown}>-</button> 
        </div> 
    </div>
    
)
}


export default ItemCount;