// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './login/Login'; // Asegúrate de tener el archivo CSS en la misma carpeta

import StudentData from './studenData/StudentData';
import Attendance from './attendance/Attendance';

function App() {
  return (
    <Router>
      <Routes>


        <Route path="/" element={<StudentData />} />
        <Route path="/attendance" element={<Attendance />} />
      </Routes>
    </Router>
  );
}

export default App;