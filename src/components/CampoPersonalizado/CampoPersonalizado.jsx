import React from 'react';
import './CampoPersonalizado.css'

function CampoPersonalizado({ nomeCampo, tipo, tamanho }) {

  return (
    <div className="flex flex-col gap-2 mb-4">
      <label className="text-sm font-semibold">{nomeCampo}</label>
       <input
       
        type={tipo}
        className="input-field"
        style={{ width: `${tamanho}px` }}
      />
    </div>
  );
};

export default CampoPersonalizado;
