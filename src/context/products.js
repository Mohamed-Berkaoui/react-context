import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const productsStore = createContext();


function ProductsContext({children}) {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios
          .get("http://localhost:3000/products")
          .then((res) => setProducts(res.data))
          .catch((e) => toast.error("somthing went wrong"));
      }, []);
  return (
    <productsStore.Provider value={{products, setProducts}}>
        {children}

    </productsStore.Provider>
  )
}

export default ProductsContext