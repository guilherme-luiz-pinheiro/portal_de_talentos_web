// src/components/FormularioCandidato.jsx
import React, { useState } from 'react';
import api from '../../api/api';

function FormularioCandidato() {
  const [formData, setFormData] = useState({
    nome: '',
    nascimento: '',
    email: '',
    telefone: '',
    cep: '',
    endereco: '',
    habilidades: [],
    formacoes: [],
  });

  const habilidadesList = [
    "Java", "Node.js", "C++", "PHP", "Python", "Go", "ADVPL", 
    "Angular", "Electron", "React", "React Native", 
    "MongoDB", "MySQL", "SQLServer", "Postgres", 
    "Backend", "Front-End"
  ];

  const buscarEndereco = async () => {
    if (formData.cep.length === 8) {
      const response = await fetch(`https://viacep.com.br/ws/${formData.cep}/json/`);
      const data = await response.json();
      setFormData({ ...formData, endereco: `${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}` });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post('/candidatos', formData);
    alert('Cadastro enviado! Confira seu email.');
  };

  const handleCheckboxChange = (habilidade) => {
    const habilidades = [...formData.habilidades];
    const index = habilidades.indexOf(habilidade);
    if (index > -1) habilidades.splice(index, 1);
    else habilidades.push(habilidade);
    setFormData({ ...formData, habilidades });
  };

  return (
    <div>
      <h2>Cadastro de Candidato</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nome" value={formData.nome} onChange={e => setFormData({...formData, nome: e.target.value})} required />
        <input type="date" placeholder="Data de Nascimento" value={formData.nascimento} onChange={e => setFormData({...formData, nascimento: e.target.value})} required />
        <input type="email" placeholder="Email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} required />
        <input type="text" placeholder="Telefone" value={formData.telefone} onChange={e => setFormData({...formData, telefone: e.target.value})} required />
        <input type="text" placeholder="CEP" value={formData.cep} onBlur={buscarEndereco} onChange={e => setFormData({...formData, cep: e.target.value})} required />
        <input type="text" placeholder="Endereço" value={formData.endereco} disabled />

        <h3>Habilidades</h3>
        {habilidadesList.map((habilidade) => (
          <div key={habilidade}>
            <input type="checkbox" onChange={() => handleCheckboxChange(habilidade)} />
            {habilidade}
          </div>
        ))}

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default FormularioCandidato;
