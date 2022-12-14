import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import WeatherResult from './components/WeatherResult';

function App() {
  return (
    <>
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path='/' element={<WeatherResult index />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
