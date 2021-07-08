import { Button, Row, Col } from 'react-bootstrap';

const ChoiceList = () => {

  return (
    <Col>
        <Row>
          <Button bg="dark" variant="dark">I'm choice 1</Button>
        </Row>
        <Row>
          <Button>I'm choice 1</Button>
        </Row>
        <Row>
         <Button>I'm choice 1</Button>
        </Row>
        <Row>
          <Button>I'm choice 1</Button>
        </Row>
    </Col>
  )
}

export default ChoiceList;