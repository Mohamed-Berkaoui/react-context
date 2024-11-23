import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function Navigator({children}) {
  return (
<>
<Navbar bg="primary" data-bs-theme="dark"> 
    <Container>
      <Navbar.Brand href="#home">{children}</Navbar.Brand>
      <Nav className="me-auto gap-4 ">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/cart">cart</NavLink>
        <NavLink to="/admin">admin</NavLink>
      </Nav>
    </Container>
  </Navbar></>
  )
}

export default Navigator