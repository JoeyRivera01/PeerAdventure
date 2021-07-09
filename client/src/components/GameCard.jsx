import React, { useState, useEffect } from 'react';
import { Card, ListGroup, Container, Col, Row, Button } from 'react-bootstrap';
import axios from 'axios';

const GameCard = () => {
  const [adventure, setAdventure] = useState({});
  const [endGame, setEndgame] = useState(false);

  useEffect(() => {
    getAdventureById(1);
  }, []);

  useEffect(() => {
    console.log('The journey continues!');
  }, [adventure]);

  const getAdventureById = (id) => {
    axios.get(`799f020e-3984-460d-aa02-096b8c0e2cb8/adventure/${id}`)
      .then((response) => {
        if (response.data.endGame) {
          setEndgame(true);
        }
        setAdventure(response.data);
      })
      .catch((err) => console.log('error while fetching adventureById', err));
  }

  return (
      <Card bg="dark" variant="dark" style={{ width: '30vw', height: '80vh' }}>
        <Container>
          <Col>
            <Row>
              <Card.Body>
                <Card.Title className='mb-5'>Choose your path!</Card.Title>
                <Card.Text style={{marginTop: '10vh'}}>
                  {adventure.story}
                </Card.Text>
              </Card.Body>
            </Row>
            <Row>
              { Object.keys(adventure).length !== 0 && endGame === false ?
                <ListGroup style={{marginTop: '10vh'}}>
                  {adventure.choices.map((choice) => {
                    return (
                      <ListGroup.Item key={Math.random() * 100000000 + 1} onClick={() => getAdventureById(choice.outcomeId)}>
                        {choice.text}
                      </ListGroup.Item>
                    )
                  })}
                </ListGroup>
              : <Button onClick={() => {
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