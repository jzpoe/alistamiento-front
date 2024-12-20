import React, { createContext, useEffect, useState } from 'react';

// Crear el contexto
export const MyContext = createContext();

// Crear el proveedor del contexto
export const MyProvider = ({ children }) => {
    const [datos, setDatos] = useState({});

    // Función para obtener datos desde el backend
  useEffect(() => {
    const fetchDatos = async () => {
      try {
        const response = await fetch('https://alistamiento-guias.vercel.app//api/datos');
        const data = await response.json();
        setDatos(data); // Guardar datos en el estado global
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    fetchDatos();
  }, []); // Ejecuta al cargar el componente

    return (
        <MyContext.Provider value={{ datos, setDatos }}>
            {children}
        </MyContext.Provider>
    );
};