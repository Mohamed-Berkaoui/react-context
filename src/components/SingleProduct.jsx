import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { cartStore } from "../context/cart";

function SingleProduct() {
    const {setCart,cart}=useContext(cartStore)
  const params = useParams(); //{id}
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:3000/products/" + params.id)
      .then((result) => {
        setProduct(result.data);
      })
      .catch((err) => {
        toast.error("error");
      });
  }, [params.id]);

  function handleAddToCart(e){
    
    setCart( cart.find(prod=>prod.product.id==product.id)?cart:[...cart,{product:product,quantity:1}])
  }

  return (
    <div>
        <img src={product.image} width={300} height={200} alt=""/>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <Button onClick={handleAddToCart}>add to cart</Button>
    </div>
  );
}

export default SingleProduct;
