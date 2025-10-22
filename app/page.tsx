"use client";

import   React, { useState, useEffect } from 'react';
import  { PersonaInfo } from '@/models/persona';
import TarjetaPersona from '@/components/TarjetaPersona';

export   default function PaginaPrincipal() {
  

  const [listaDePersonas, setListaDePersonas] = useState<PersonaInfo[]>([]);


  useEffect(() => {
    
    const     datosPersonas: PersonaInfo[] = [
      { id: 1, nombre: 'Ana Gómez', ocupacion: 'Diseñadora UX/UI', pais: 'España' },
      { id: 2, nombre: 'Carlos Ruis', ocupacion: 'Desarrollador Backend', pais: 'México' },
      { id: 3, nombre: 'Lucia  Fernández', ocupacion: 'Data  Scientist', pais: 'Argentina' },
      { id: 4, nombre: 'Javier Morales', ocupacion: 'Ingeniero de Software', pais: ' Colombia' },
      { id: 5, nombre: 'Sofia Castro', ocupacion: 'Product  Manager', pais: 'Chile' },
    ];
    
    setListaDePersonas(datosPersonas);

  }, []);




  return (
    <main className="flex min-h-screen flex-col items-center p-12 bg-slate-900">
    <h1 className="text-4xl font-bold mb-8 text-white">
    Directorio del Equipo
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {listaDePersonas.map ((persona) => (
      <TarjetaPersona 
      key={persona.id}
      id={persona.id}
      nombre={persona.nombre}
      ocupacion= {persona.ocupacion}
      pais={persona.pais}
      />
))}
</div>
</main>
);
}
