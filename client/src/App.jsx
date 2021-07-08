import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import NavigationBar from './components/NavigationBar.jsx';
import GameCard from './components/GameCard.jsx';
import PeerPanel from './components/PeerPanel.jsx';



function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <header className="App-header">
      <Container >
          <Row>
            <Col>
              <GameCard/>
            </Col>
            <Col>
              <PeerPanel/>
            </Col>
          </Row>
      </Container>
      </header>
    </div>
  );
}

export default App;
