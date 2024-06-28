import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import EvaluateOptions from './components/EvaluateOptions';
import RentRoom from './components/RentRoom';
import SignIn from './components/SignIn'; // Asegúrate de que el nombre coincida con el archivo
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
`;

function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/evaluate-options" element={<EvaluateOptions />} />
          <Route path="/rent-room" element={<RentRoom />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
