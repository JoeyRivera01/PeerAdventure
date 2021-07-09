import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';

const PeerPanel = () => {

  return (
    <Card bg="dark" variant="dark" style={{ width: '35vw', height: '80vh' }}>
      <Container>
        <Card.Body>
          <Card.Title>Players</Card.Title>
          <Col id='video-grid'>
          </Col>
      </Card.Body>
      </Container>
    </Card>
  );
};

export default PeerPanel;