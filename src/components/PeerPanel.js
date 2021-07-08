import { Row, Col, Card, Image, Container } from 'react-bootstrap';

const PeerPanel = () => {

  return (
    <Card bg="dark" variant="dark" style={{ width: '35vw', height: '80vh' }}>
      <Container>
        <Card.Body>
          <Card.Title>Players</Card.Title>
          <Col>
            <Row xs={6} md={4} className="justify-content-md-center mb-3">
              <Image src='https://picsum.photos/200/400' fluid />
              <Image src='https://picsum.photos/200/400' fluid />
            </Row>
          </Col>
          <Col>
            <Row xs={6} md={4} className="justify-content-md-center mb-3">
              <Image src='https://picsum.photos/200/400' fluid />
              <Image src='https://picsum.photos/200/400' fluid />
            </Row>
          </Col>
      </Card.Body>
      </Container>
    </Card>
  );
};

export default PeerPanel;