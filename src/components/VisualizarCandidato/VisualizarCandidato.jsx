// src/components/VisualizarCandidato.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api/api';

function VisualizarCandidato() {
  const { id } = useParams();
  const [candidato, setCandidato] = useState(null);

  useEffect(() => {
    fetchCandidato();
  }, []);

  const fetchCandidato = async () => {
    const response = await api.get(`/candidatos/${id}`);
    setCandidato(response.data);
  };

  if (!candidato) return <p>Carregando...</p>;

  return (
    <div>
      <h2>Detalhes do Candidato</h2>
      <p><strong>Nome:</strong> {candidato.nome}</p>
      <p><strong>Email:</strong> {candidato.email}</p>
      <p><strong>Telefone:</strong> {candidato.telefone}</p>
      <p><strong>Endereço:</strong> {candidato.endereco}</p>
      <p><strong>Habilidades:</strong> {candidato.habilidades.join(", ")}</p>
      <p><strong>Formações:</strong></p>
      <ul>
        {candidato.formacoes.map((formacao, index) => (
          <li key={index}>{formacao.nomeCurso} - {formacao.nomeInstituicao} - {formacao.dataConclusao}</li>
        ))}
      </ul>
    </div>
  );
}

export default VisualizarCandidato;
