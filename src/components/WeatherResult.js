import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import axios from 'axios';

const WeatherResult = () => {
  const [data, setData] = useState({});
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const apiKey = 'ccdd99e95bf1e6398858d9d7b7745430';
  const unit = 'metric';

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(false);
    setCity('');
    setError('');
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`
      )
      .then((response) => {
        setData(response.data);
        setLoading(true);
      })
      .catch((error) => {
        setError(error.response.data.message);
      });
  };
  return (
    <Container className='text-center pt-4'>
      <h1 className='fs-3 text-warning fw-bold pt-5'>
        Weather API Application
      </h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className='pt-4' controlId='citySearch'>
          <Row>
            <Col>
              <Form.Control
                value={city}
                type='text'
                placeholder='Enter City'
                className='w-50 m-auto'
                onChange={(e) => setCity(e.target.value)}
              ></Form.Control>
            </Col>
          </Row>
        </Form.Group>
        <Button variant='warning' type='submit' className='mt-3 px-4'>
          Search
        </Button>
      </Form>
      {error ? <h2 className='text-white'>{error}</h2> : ''}
      {loading && (
        <>
          <Row className='mt-4 text-white'>
            <Col md={2} />{' '}
            <Col md={3} className='transparent-color pt-3'>
              <strong className='d-block fs-7'>
                {Math.floor(data.main.temp)}&#8451;
              </strong>
              <Image
                src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
                fluid
                rounded
              ></Image>
            </Col>
            <Col
              md={5}
              className='text-white transparent-color py-3 justify-content-center align-items-center d-flex flex-column'
            >
              <h2 className='text-uppercase fs-2'>{data.name}</h2>

              <p className='text-uppercase fs-5'>
                {data.weather[0].description}
              </p>
              <Row className='mt-4 border-top py-3'>
                <Col xs={4}>
                  <strong>{Math.floor(data.main.feels_like)}&#8451;</strong>
                  <p className='my-0 fs-8'>Feels Like</p>
                </Col>
                <Col xs={4}>
                  <strong>{data.main.humidity}%</strong>
                  <p className='my-0 fs-8'>Humidity</p>
                </Col>
                <Col xs={4}>
                  <strong>{Math.floor(data.wind.speed)} mPh</strong>
                  <p className='my-0 fs-8'>Wind</p>
                </Col>
              </Row>
            </Col>
            <Col md={2} />
          </Row>
        </>
      )}
    </Container>
  );
};

export default WeatherResult;
