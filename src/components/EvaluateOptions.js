import React from 'react';
import { Link } from 'react-router-dom';

function EvaluateOptions() {
  return (
    <div>
      <h2>Evaluar Opciones</h2>
      <p>Comparar opciones y contactar para agendar una cita.</p>
      <Link to="/rent-room">Proceder a Alquilar</Link>
    </div>
  );
}

export default EvaluateOptions;
