import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InputScreen from './InputScreen';
import ChartScreen from './ChartScreen';

function App() {
  return (
 
      <Routes>
        <Route path="/" element={<InputScreen />} />
        <Route path="/charts" element={<ChartScreen />} />
      </Routes>
      
  );
}

export default App;
