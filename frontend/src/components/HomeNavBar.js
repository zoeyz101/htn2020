import React, { useState } from 'react';
import './components.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import logo from '../logo.svg'

const NavBar = (props) => {

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">
        <img
          alt=""
          src={logo}
          width="30"
          height="50"
        />{' '}
        Food App
      </Navbar.Brand>
      <Nav className="justify-content-end" activeKey="/home">
        <Nav.Link href="/login">Login</Nav.Link>
        <Button variant="primary" href="/signup">Sign Up</Button>
      </Nav>
  </Navbar>
  );
}

export default NavBar