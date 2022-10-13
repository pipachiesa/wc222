import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import '../App.css'

function NavBar() {
    return (
<div className="navbar bg-rose-800">
    <div className="flex-1">
        <Link to='/Home' className="btn btn-ghost normal-case text-xl">
            <img className='wclogo' src='https://static.wixstatic.com/media/bbe01b_c4b47521203846faa70386699da89057~mv2.png/v1/crop/x_0,y_0,w_898,h_790/fill/w_480,h_420,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/FIFA%20World%20Cup%20Qatar%202022%20Logo%20(PNG-1080p)%20-%20FileVector69.png'></img>
        </Link>
    </div>
    <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
        <li><Link to={'/Home'}>HOME</Link></li>
        <li><Link to={'/Shop'}>SHOP</Link></li>
        <li><a>CONTACT US</a></li>
        <li><CartWidget/></li>
        </ul>
    </div>
    </div>
    )
}

export default NavBar