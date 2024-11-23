import { createContext, useState } from "react";

export const cartStore = createContext();


function CartContext({children}) {
  const [cart, setCart] = useState([])

  return (
    <cartStore.Provider value={{cart, setCart}}>
        {children}
    </cartStore.Provider>
  )
}

export default CartContext