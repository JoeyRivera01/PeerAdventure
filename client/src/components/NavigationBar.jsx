import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

const NavigationBar = ({getAdventureById, setEndgame, endgame}) => {

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home" style={{marginLeft: '1vw'}}>Peer Adventure</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-left" style={{marginRight: '1vw'}}>
        <Nav className="mr-auto">
          <NavDropdown title="Actions" id="collasible-nav-dropdown">
            <NavDropdown.Item onClick={() => alert(`Invite the player to the following url: ${document.URL}`)}>
              Invite Player
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item
              onClick={() => {
                getAdventureById(1);
                setEndgame(false);
              }}>
                New Game
              </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
};

export default NavigationBar;