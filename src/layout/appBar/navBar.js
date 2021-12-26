import React, { useState } from 'react';
import { Nav, Navbar, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'react-bootstrap';

const NavBar = (props) => {


  return (
    <Navbar bg="light" expand="lg" className={props.className}>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#home" >Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Features">Features</Nav.Link>
            <Nav.Link href="#Pricing">Pricing</Nav.Link>
            <Nav.Link href="#Download">Download</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;