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
      </Navbar.Brand>
      <Navbar.Brand href="/">
        Nutribuddy
      </Navbar.Brand>
      <Nav className="justify-content-end" activeKey="/home">
        <Nav.Link href="/fooditems">food items</Nav.Link>
        <Nav.Link href="/recipes"> recipes</Nav.Link>
      </Nav>
  </Navbar>
  );
}

export default NavBar