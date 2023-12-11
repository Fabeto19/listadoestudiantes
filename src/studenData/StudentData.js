// StudentData.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentData = () => {
  const [studentInfo, setStudentInfo] = useState(null);
  const [selectedWeek, setSelectedWeek] = useState(1);

  useEffect(() => {
    // Realizar solicitud para obtener datos del estudiante desde la API
    axios.get('https://girapi.bladimirchipana.repl.co/alumnos?_idUsuario=6531d08612ec096c58717b97&_idRiesgo=65754cdbd6a61db3295d8f3b')
      .then(response => setStudentInfo(response.data))
      .catch(error => console.error('Error fetching student data:', error));
  }, []);

  const weeks = Array.from({ length: 16 }, (_, index) => index + 1); // Generar semanas del 1 al 16

  const handleWeekChange = (week) => {
    setSelectedWeek(week);
  };

  return (
    <div>
      <h2>Datos del Estudiante</h2>
      {studentInfo && studentInfo.length > 0 && (
        <div>
          {/* Mostrar información del primer estudiante en la lista */}
          <p>Nombre: {studentInfo[0].nombre}</p>
          <p>Curso: {studentInfo[0].curso}</p>
          <p>Correo: {studentInfo[0].correo}</p>
          <p>Número de Whatsapp: {studentInfo[0].wasap}</p>
        </div>
      )}

      <div>
        <h3>Semanas</h3>
        <div style={{ display: 'flex' }}>
          {weeks.map((week) => (
            <div key={week} style={{ marginRight: '10px' }}>
              <button onClick={() => handleWeekChange(week)}>
                Semana {week}
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedWeek && studentInfo && studentInfo.length > 0 && (
        <div>
          <h3>Asistencias para la Semana {selectedWeek}</h3>
          <table>
            <thead>
              <tr>
                <th>Día</th>
                <th>Asistió</th>
                <th>No asistió</th>
              </tr>
            </thead>
            <tbody>
              {['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'].map((day, index) => (
                <tr key={index}>
                  <td>{day}</td>
                  <td>
                    <input type="checkbox" checked={studentInfo[0][`sem${selectedWeek}`] === 1} disabled={true} />
                  </td>
                  <td>
                    <input type="checkbox" checked={studentInfo[0][`sem${selectedWeek}`] === 0} disabled={true} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default StudentData;
