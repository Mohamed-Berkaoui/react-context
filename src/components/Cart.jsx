import React, { useContext } from 'react'
import CartBox from './CartBox'
import { cartStore } from '../context/cart'


function Cart() {
    const {cart,setCart}=useContext(cartStore)
  return (
    <div style={{display:"flex",flexDirection:"column",gap:"20px" ,justifyContent:"center",alignItems:"center"}}>
        {cart.map(item=><CartBox cartItem={item} setCart={setCart} cart={cart}/>)}
    </div>
  )
}

export default Cart