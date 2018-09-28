import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import Comments from './components/Comments';

class App extends Component {
  render() {
    return (
      <Container className="comments-container">
        <Row>
          <Col>
            <Comments />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
