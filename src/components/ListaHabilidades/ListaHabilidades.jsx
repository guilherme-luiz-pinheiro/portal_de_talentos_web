import React, { useState } from 'react';
import './ListaHabilidades.css';

function ListaHabilidades({ nomeCampo, tipo, tamanho, opcoes }) {
    const [habilidadesSelecionadas, setHabilidadesSelecionadas] = useState([]);
    const [opcoesRestantes, setOpcoesRestantes] = useState(opcoes);

    const handleSelectChange = (event) => {
        const novaHabilidade = event.target.value;

        if (!habilidadesSelecionadas.includes(novaHabilidade)) {
            setHabilidadesSelecionadas([...habilidadesSelecionadas, novaHabilidade]);
            setOpcoesRestantes(opcoesRestantes.filter(opcao => opcao !== novaHabilidade));
        }
    };

    const handleRemoveHabilidade = (habilidade) => {
        setHabilidadesSelecionadas(habilidadesSelecionadas.filter(h => h !== habilidade));
        setOpcoesRestantes([...opcoesRestantes, habilidade]);
    };

    return (
        <div className="flex flex-col gap-2 mb-4">
            <label className="text-sm font-semibold">{nomeCampo}</label>

            {tipo === 'select' ? (
                <>
                    <select
                        className="input-field"
                        style={{ width: `${tamanho}px` }}
                        onChange={handleSelectChange}
                    >
                        {opcoesRestantes.map((opcao, index) => (
                            <option key={index} value={opcao}>
                                {opcao}
                            </option>
                        ))}
                    </select>

                    {habilidadesSelecionadas.length > 0 && (
                        <div className="mt-4">
                            <ul>
                                {habilidadesSelecionadas.map((habilidade, index) => (
                                    <li key={index} className="flex items-center justify-between">
                                        <span>{habilidade}</span>
                                        <button
                                            onClick={() => handleRemoveHabilidade(habilidade)}
                                            className="excluir-habilidade"
                                        >
                                            &times;
                                        </button>

                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </>
            ) : (
                <input
                    type={tipo}
                    className="input-field"
                    style={{ width: `${tamanho}px` }}
                />
            )}
        </div>
    );
}

export default ListaHabilidades;
