// src/pages/Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h2>Área do Gestor</h2>
      <nav>
        <Link to="/cadastro">Cadastrar Candidato</Link> | 
        <Link to="/candidatos">Listar Candidatos</Link>
      </nav>
    </div>
  );
}

export default Dashboard;
