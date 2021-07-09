import React, { useEffect } from 'react';
import { Card, ListGroup, Container, Col, Row, Button } from 'react-bootstrap';

const GameCard = ({adventure, endGame, getAdventureById, setEndgame}) => {
  useEffect(() => {
    getAdventureById(1);
  }, []);

  useEffect(() => {
    console.log('The journey continues!');
  }, [adventure]);

  return (
      <Card bg="dark" variant="dark" style={{ width: '30vw', height: '80vh' }}>
        <Container>
          <Col>
            <Row>
              <Card.Body>
                <Card.Title style={{marginBottom: '1vh'}}>Choose your path!</Card.Title>
                <Card.Img variant="top" src={adventure.storyImage} height='275vh' style={{ objectFit: 'cover' }}/>
                <Card.Text style={{marginTop: '1vh'}}>
                  {adventure.story}
                </Card.Text>
              </Card.Body>
            </Row>
            <Row>
              { Object.keys(adventure).length !== 0 && endGame === false ?
                <ListGroup style={{marginTop: '1vh'}}>
                  {adventure.choices.map((choice) => {
                    return (
                      <ListGroup.Item
                        key={Math.random() * 100000000 + 1}
                        onClick={() => getAdventureById(choice.outcomeId)}
                      >
                        {choice.text}
                      </ListGroup.Item>
                    )
                  })}
                </ListGroup>
              : <Button className="mt-3" onClick={() => {
                getAdventureById(1);
                setEndgame(false);
                }}>
                Adventure Again?
                </Button> }
            </Row>
          </Col>
        </Container>
      </Card>
  )
};

export default GameCard;