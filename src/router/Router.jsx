// src/router/Router.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import FormularioCandidato from '../components/FormularioCandidato/FormularioCandidato';
import ListaCandidatos from '../components/ListaCandidatos/ListaCandidatos';
import VisualizarCandidato from '../components/VisualizarCandidato/VisualizarCandidato';

const RoutesConfig = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/formulario" element={<FormularioCandidato />} />
        <Route path="/listar-candidatos" element={<ListaCandidatos />} />
        <Route path="/visualizar-candidato/:id" element={<VisualizarCandidato />} />
        {/* Definindo a página inicial */}
        <Route path="/" element={<Login />} /> {/* Página inicial como Login */}
      </Routes>
    </Router>
  );
};

export default RoutesConfig;
