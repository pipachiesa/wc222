import * as React from 'react';
import TextField from '@mui/material/TextField';
import { addDoc, collection } from "firebase/firestore";
import { db } from '../FirebaseConfig';
import { useState } from 'react';
import moment from 'moment/moment';
import { UseProductsContext } from '../CartContext/CartContext';
import { Link } from 'react-router-dom';
import MessageId from '../MessageId/MessageId';
import { validateEmail } from '../../Helpers/Helper';

const initialBuyer = {
	nombre: '',
	apellido: '',
	telefono: '',
	email: '',
}
const initialState = {
	buyer: initialBuyer,
	items: [],
	date: '',
	total: '',
};

export default function BasicTextFields({items, total}) {
	const {ClearCart, CartList} = UseProductsContext()
    const [values, setValues] = useState(initialState);
	const [buyer, setBuyer] = useState(initialBuyer);
	const [purchaseID, setPurchaseID] = useState('');
	const [isEmailValid, setIsEmailValid] = useState(false);
	const message = `¡Gracias por su compra! Su ID de transacción es: ${purchaseID}`
	const handleOnChange = (e) => {  
		setBuyer({ ...buyer, [e.target.name]: e.target.value });
		setValues({buyer: buyer, total: total, items: items, date:  moment().format('YYYY-MM-DD HH:mm:ss')})
		if (e.target.name === 'email') setIsEmailValid(validateEmail(e.target.value))
	};

    const onSubmit = async (e) => {
        e.preventDefault();
        const docRef = await addDoc(collection(db, 'purchases'), {
			values,
		});
        setPurchaseID(docRef.id);
		setBuyer(initialBuyer)
		setValues(initialState);
		ClearCart();
    }

return (
	<div>
		{CartList.items.length ?
    <div className='px-3'>
				<TextField className='px-2'
					placeholder='Nombre'
					name='nombre'
					value={buyer.nombre}
					type='text'
					onChange={handleOnChange}
				/>
				<TextField className='px-2'
					placeholder='Apellido'
					name='apellido'
					value={buyer.apellido}
					type='text'
					onChange={handleOnChange}
				/>
				<TextField className='px-2'
					placeholder='Email'
					name='email'
					value={buyer.email}
					type='email'
					onChange={handleOnChange}
				/>
				<TextField className='px-2'
					placeholder='Telefono'
					name='telefono'
					value={buyer.telefono}
					type='text'
					onChange={handleOnChange}
				/>
				{ buyer.email && !isEmailValid ? <MessageId type={'error'} message={'Invalid Email'} /> : ''}
				<button onClick={onSubmit} className="int__button my-3 mx-2">ENVIAR</button>
			</div> 
			: 
			<div>
				<span className='mx-5 fw-bold'>¡GRACIAS POR SU COMPRA!</span> 
				{purchaseID && <MessageId type={'success'} message={message} />}
				<Link to="/">
					<div> <button className="int__button my-1 mx-5 mt-3" style={{ lineHeight: '0.3rem' }}>VOLVER AL INICIO</button></div>
				</Link>
			</div>
			}
	</div>);
}