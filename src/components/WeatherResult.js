import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const WeatherResult = () => {
  return (
    <Container className='text-center mt-4'>
      <h1 className='fs-3'>Weather API Application</h1>
      <Row>
        <Col md={6}>Display icons</Col>
        <Col md={6}>Display details</Col>
      </Row>
    </Container>
  );
};

export default WeatherResult;
