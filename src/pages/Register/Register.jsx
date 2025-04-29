import React, { useState } from 'react';
import api from '../../api/api'; // Importe sua instância do axios
import { useNavigate } from 'react-router-dom';
import './Register.css';

function Register() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }

    try {
      const response = await api.post('/register', { email, senha });
      console.log(response.data);  // Log da resposta
      alert(`Status da resposta: ${response.status}`);
      if (response.status === 201) {
        alert('Cadastro realizado com sucesso!');
        navigate('/login');  // Redireciona para a tela de login após o cadastro
      }
    } catch (error) {
      console.error('Erro ao cadastrar:', error);

      // Verifica se o erro tem uma resposta
      if (error.response) {
        // Exibe detalhes do erro na resposta
        console.error('Erro da API:', error.response);
        alert(`Falha ao criar conta: ${error.response.data.message || 'Erro desconhecido'}`);
      }
      // Verifica se há um erro de requisição (não recebeu resposta do servidor)
      else if (error.request) {
        console.error('Erro na requisição:', error.request);
        alert('Falha ao criar conta. A requisição não obteve resposta do servidor.');
      }
      // Caso o erro seja algo diferente
      else {
        console.error('Erro desconhecido:', error.message);
        alert('Falha ao criar conta. Tente novamente mais tarde.');
      }
    }
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <h2>Cadastrar Conta</h2>
        <form onSubmit={handleRegister}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={e => setSenha(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirmar Senha"
            value={confirmarSenha}
            onChange={e => setConfirmarSenha(e.target.value)}
            required
          />
          <button type="submit">Cadastrar</button>
        </form>
        <p>
          Já tem uma conta? <a href="/login">Faça login</a>
        </p>
      </div>
    </div>
  );
}

export default Register;
