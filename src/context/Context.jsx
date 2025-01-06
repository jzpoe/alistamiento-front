import React, { createContext, useContext, useEffect, useState } from 'react';
import { MyContext_Hecho } from './Context_Hecho';

// Crear el contexto
export const MyContext = createContext();

// Crear el proveedor del contexto
export const MyProvider = ({ children }) => {
  const [datos, setDatos] = useState([]);
  const [nombre, setNombre] = useState('');
  const [guia, setGuia] = useState('');
  const [valor, setValor] = useState('');
  const [fecha, setFecha] = useState('');
  const [error, setError] = useState(null); // Estado para manejar errores

  // Función para obtener datos desde el backend
  const fetchDatos = async () => {
    
    try {
      const response = await fetch('https://alistamiento-backend.vercel.app/api/datos');
      //const response = await fetch('http://localhost:3001/api/datos');

      
      const data = await response.json();
      setDatos(data); // Guardar datos en el estado global
      console.log('Datos obtenidos:', data);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
    
  };

  // Llamar a la función fetchDatos al cargar el componente
  useEffect(() => {
    fetchDatos();
  }, []);
  

  const HandleEnviar = async () => {

    try {
      const response = await fetch('https://alistamiento-backend.vercel.app/api/agregar', {
      //const response = await fetch('http://localhost:3001/api/agregar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre,
          guia,
          valor,
          fecha,
        }),
      });

      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }

      const data = await response.json();
      console.log('Respuesta del servidor:', data);

      // Limpiar el formulario después de un envío exitoso
      setNombre('');
      setGuia('');
      setValor('');
      setFecha('');
      setError(null); // Limpiar errores si todo fue exitoso

      // Obtener los datos actualizados
      fetchDatos(); // Actualizar las tarjetas con los nuevos datos
    } catch (error) {
      console.error('Error al ingresar los datos:', error);
      setError('Error al enviar datos al servidor');
    }
    
  };
   
  
  

  return (
    <MyContext.Provider
      value={{
        datos,
        setDatos,
        HandleEnviar,
        nombre,
        setNombre,
        guia,
        setGuia,
        valor,
        setValor,
        fecha,
        setFecha,
        error,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};