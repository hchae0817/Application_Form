import React from 'react';
import LandingPage from './component/LandingPage';
import Form from './component/Form';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </Router>

  );
}

export default App;
