import React, { useState } from 'react';
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Food App</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/fooditems/">My Food Items</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/recipes">Recipes</NavLink>
            </NavItem>
          </Nav>
          <Button className="ml-2" color="primary" href="login">Log In</Button>
          <Button color="secondary">Sign Up</Button>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar