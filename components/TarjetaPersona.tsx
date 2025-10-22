import React from 'react';
import { PersonaInfo } from '@/models/persona';

const TarjetaPersona = ({ nombre, ocupacion, pais }: PersonaInfo) => {
  return (
    <div className="bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-700 hover:bg-slate-700 transition-colors">
      <h3 className="text-2xl font-bold text-sky-400">{nombre}</h3>
      <p className="text-slate-300">{ocupacion}</p>
      <p className="text-slate-400 mt-2">📍 {pais}</p>
    </div>
  );
};

export default TarjetaPersona;