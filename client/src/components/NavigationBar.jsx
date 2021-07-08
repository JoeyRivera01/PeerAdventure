import React, { useState, useEffect } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home" style={{marginLeft: '1vw'}}>Peer Adventure</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-left" style={{marginRight: '1vw'}}>
        <Nav className="mr-auto">
          <NavDropdown title="Actions" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Invite Player</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.2">New Game</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Join Game</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
};

export default NavigationBar;