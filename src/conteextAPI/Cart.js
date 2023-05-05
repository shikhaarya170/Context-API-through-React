import React, { useContext } from 'react'
import { ecommerceContext } from './First'
import {Link} from "react-router-dom"


function Cart() {
    const{cart,setCart} = useContext(ecommerceContext)

    function handleDeleteFromCart(e,itemToDelete){
   e.preventDefault()
    setCart(cart.filter(cartItem =>cartItem.id !== itemToDelete.id))
 }
 

  return (
    <>
    <div className='item'>
    {
        cart.map((item)=>{
    return(
        <div className='cart-item' key={item.id}>
        <div className='left'>
        <img src={item.image} alt={item.title}/>
        </div>

        <div className='right'>
            <h1>{item.title}</h1>
            <p>{item.price}</p>
            <button onClick={(e)=>{handleDeleteFromCart(e,item)}}>Delete</button>
        </div>

        </div>

    ) 
        })
    }
    </div>
    </>
  )
}

export default Cart