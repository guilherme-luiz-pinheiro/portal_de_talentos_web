import React, { useState } from 'react';
import CampoPersonalizado from "../../components/CampoPersonalizado/CampoPersonalizado";
import ListaHabilidades from "../../components/ListaHabilidades/ListaHabilidades";
import './CadastroCandidato.css';

function CadastroCandidato() {
    const [formData, setFormData] = useState({
        nome_completo: '',
        data_nascimento: '',
        email: '',
        telefone: '',
        cep: '',
        rua: '',
        numero: '',
        bairro: '',
        cidade: '',
        estado: '',
        curso: '',
        instituicao: '',
        data_conclusao: '',
        habilidades: [],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3333/candidatos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            console.log('Candidato cadastrado:', data);
        } catch (error) {
            console.error('Erro ao cadastrar candidato:', error);
        }
    };

    return (
        <div className="container">
            <h1 className="title">Cadastro de Candidato</h1>
            <form onSubmit={handleSubmit}>
                <CampoPersonalizado nomeCampo="Nome Completo" tipo="text" tamanho={200} name="nome_completo" onChange={handleChange} />
                <CampoPersonalizado nomeCampo="Data de Nascimento" tipo="date" tamanho={120} name="data_nascimento" onChange={handleChange} />
                <CampoPersonalizado nomeCampo="E-mail" tipo="email" tamanho={220} name="email" onChange={handleChange} />
                <CampoPersonalizado nomeCampo="Telefone" tipo="tel" tamanho={110} name="telefone" onChange={handleChange} />
                <CampoPersonalizado nomeCampo="CEP" tipo="text" tamanho={100} name="cep" onChange={handleChange} />
                <CampoPersonalizado nomeCampo="Rua" tipo="text" tamanho={250} name="rua" onChange={handleChange} />
                <CampoPersonalizado nomeCampo="Número" tipo="text" tamanho={50} name="numero" onChange={handleChange} />
                <CampoPersonalizado nomeCampo="Bairro" tipo="text" tamanho={220} name="bairro" onChange={handleChange} />
                <CampoPersonalizado nomeCampo="Cidade" tipo="text" tamanho={220} name="cidade" onChange={handleChange} />
                <CampoPersonalizado nomeCampo="Estado" tipo="text" tamanho={100} name="estado" onChange={handleChange} />
                <CampoPersonalizado nomeCampo="Nome do Curso" tipo="text" tamanho={220} name="curso" onChange={handleChange} />
                <CampoPersonalizado nomeCampo="Nome da Instituição" tipo="text" tamanho={220} name="instituicao" onChange={handleChange} />
                <CampoPersonalizado nomeCampo="Data de Conclusão" tipo="date" tamanho={120} name="data_conclusao" onChange={handleChange} />
                <ListaHabilidades
                    nomeCampo="Habilidades"
                    tipo="select"
                    tamanho={300}
                    opcoes={["Java", "Node.js", "C++", "PHP", "Python", "Go", "Angular", "React", "MySQL", "Postgres"]}
                    name="habilidades"
                    onChange={handleChange}
                />
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
}

export default CadastroCandidato;
