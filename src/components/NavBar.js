import React from 'react'
import CartWidget from './CartWidget'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function NavBar() {
    return (
<div className="navbar bg-rose-800">
    <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">WC22</a>
    </div>
    <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
        <li><a>HOME</a></li>
        <li tabIndex={0}>
            <a>
            SHOP
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
            </a>
            <ul className="p-2 bg-rose-800">
            <li><a>HOME KITS</a></li>
            <li><a>AWAY KITS</a></li>
            </ul>
        </li>
        <li><a>CONTACT US</a></li>
        <li>
            <CartWidget></CartWidget>
        </li>
        </ul>
    </div>
    </div>
    )
}

export default NavBar