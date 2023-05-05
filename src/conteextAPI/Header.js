import React ,{useContext} from 'react'
import {Link} from "react-router-dom"
import Cart from "./Cart"
import { ecommerceContext } from './First'

function Header() {
    const {cart} = useContext(ecommerceContext)


  return (
   <header>
    <h1>Ecommerce</h1>
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/Cart"><span className='count'>{cart.length}</span>Cart</Link></li>
        </ul>
    </nav>
   </header>
  )
}

export default Header