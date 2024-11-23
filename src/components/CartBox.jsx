import React, { useContext } from 'react'
import { cartStore } from '../context/cart'

function CartBox({cartItem}) {
    const {setCart,cart}=useContext(cartStore)
    function handleIncQuantity(){
            setCart(cart.map(item=>item.product.id==cartItem.product.id?{...item,quantity:item.quantity+1}:item))
    }
    function handleDecQuantity(){
        setCart(cart.map(item=>item.product.id==cartItem.product.id&&item.quantity>1?{...item,quantity:item.quantity-1}:item))
}
function handleDelete(){
    setCart(cart.filter(item=>item.product.id==cartItem.product.id?false:true))
}
  return (
    <div className='cartbox'>
        <h4>{cartItem.product.title}</h4>
        <p>{cartItem.product.price}</p>
    <div>    <button onClick={handleIncQuantity}>+</button>
        <p>{cartItem.quantity}</p>
        <button onClick={handleDecQuantity}>-</button>
        <button onClick={handleDelete}>delete</button></div>
    </div>
  )
}

export default CartBox