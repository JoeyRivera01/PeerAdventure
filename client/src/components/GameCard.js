import { Card, ListGroup, Container, Col, Row } from 'react-bootstrap';
// import ChoiceList from './ChoiceList.js'

const GameCard = () => {
  return (
      <Card bg="dark" variant="dark" style={{ width: '30vw', height: '80vh' }}>
        <Container>
          <Col>
            <Row>
              <Card.Body>
                <Card.Title className='mb-5'>Choose your path!</Card.Title>
                <Card.Text style={{marginTop: '10vh'}}>
                  You see a dragon flying down towards the party! It looks Hungry
                </Card.Text>
              </Card.Body>
            </Row>
            <Row>
              <ListGroup style={{marginTop: '10vh'}}>
                <ListGroup.Item>Choice1</ListGroup.Item>
                <ListGroup.Item>Choice2</ListGroup.Item>
                <ListGroup.Item>Choice3</ListGroup.Item>
                <ListGroup.Item>Choice4</ListGroup.Item>
              </ListGroup>
            </Row>
          </Col>
        </Container>
      </Card>
  )
};

export default GameCard;