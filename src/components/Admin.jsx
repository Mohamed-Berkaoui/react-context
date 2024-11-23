import React, { useContext } from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { productsStore } from "../context/products";


function Admin() {
    const { products }=useContext(productsStore)
    const navigate=useNavigate()
  return (
    <div style={{width:"70%" ,margin:"20px auto"}}>
      <Table striped bordered hover >
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>price</th>
            <th>category</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button onClick={()=>navigate("/add")}>add new produt</Button>
    </div>
  );
}

export default Admin;
