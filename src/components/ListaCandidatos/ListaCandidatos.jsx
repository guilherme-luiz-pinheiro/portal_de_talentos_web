// src/components/ListaCandidatos.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../api/api';

function ListaCandidatos() {
  const [candidatos, setCandidatos] = useState([]);
  const [busca, setBusca] = useState('');

  useEffect(() => {
    fetchCandidatos();
  }, []);

  const fetchCandidatos = async () => {
    const response = await api.get('/candidatos');
    setCandidatos(response.data);
  };

  const filtrarCandidatos = () => {
    return candidatos.filter(candidato =>
      candidato.nome.toLowerCase().includes(busca.toLowerCase()) ||
      candidato.habilidades.some(hab => hab.toLowerCase().includes(busca.toLowerCase()))
    );
  };

  return (
    <div>
      <h2>Lista de Candidatos</h2>
      <input type="text" placeholder="Buscar por nome ou habilidade" value={busca} onChange={(e) => setBusca(e.target.value)} />
      <ul>
        {filtrarCandidatos().map(candidato => (
          <li key={candidato.codigo}>
            {candidato.nome} - {candidato.email} - {candidato.telefone} - {candidato.habilidades.join(", ")}
            <Link to={`/candidato/${candidato.id}`}>Ver detalhes</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaCandidatos;
