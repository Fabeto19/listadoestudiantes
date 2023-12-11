// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './login/Login';
import StudentData from './studenData/StudentData';
import Attendance from './attendance/Attendance';

function App() {
  return (
    <Router>
      <Routes>
      // <Route path="/" element={<Login />} />

        <Route path="/student-data" element={<StudentData />} />
        <Route path="/attendance" element={<Attendance />} />
      </Routes>
    </Router>
  );
}

export default App;