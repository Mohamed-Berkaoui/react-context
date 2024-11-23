import axios from "axios";
import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { productsStore } from "../context/products";


function AddProduct() {
    const {setProducts,products}=useContext(productsStore)
    function handleSubmit(e){
        e.preventDefault()
        const product={
            title:e.target.title.value ,
            price:e.target.price.value,
            category:e.target.category.value
        }
      axios.post("http://localhost:3000/products",product)
      .then(res=>{toast.success('product added ');
        setProducts([...products,res.data])
      })
      .catch(e=>toast.error('error'))
    }
  return (
  <div style={{width:"70%" ,margin:"20px auto"}}>
      <Form onSubmit={handleSubmit} >
      <Form.Group className="mb-3">
        <Form.Label>title</Form.Label>
        <Form.Control type="text" placeholder="title"  name="title" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>price</Form.Label>
        <Form.Control type="number" placeholder="price" name="price" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>category</Form.Label>
        <Form.Select aria-label="Default select example" name="category">
          <option value="men's clothing">men's clothing</option>
          <option value="jewelery">jewelery</option>
          <option value="electronics">electronics</option>
        </Form.Select>
      </Form.Group>
      <Button type="submit">submit</Button>
    </Form>
  </div>
  );
}

export default AddProduct;
