// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './login/Login'; // Asegúrate de tener el archivo CSS en la misma carpeta

import StudentData from './studenData/StudentData';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StudentData />} />
      </Routes>
    </Router>
  );
}

export default App;