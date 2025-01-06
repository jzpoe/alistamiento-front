import React, { createContext, useEffect, useState } from "react";

export const MyContext_Hecho = createContext();

export const Context_Hecho = ({ children }) => {
  const [hecho, setHecho] = useState({});

  const HandleHecho = async (id) => {
    try {
        const response = await fetch(`https://alistamiento-backend.vercel.app/api/hecho/${id}`, {
      //const response = await fetch(`http://localhost:3001/api/hecho/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ hecho: true }),
      });

      if (!response.ok) {
        console.error("Error al marcar como hecho:", await response.text());
        return; // Salimos si hubo un error en la respuesta.
      }

      // Actualiza los datos locales
      setHecho((prev) => ({ ...prev, [id]: true })); // Para el estado local en el contexto

      console.log(`Elemento con ID ${id} marcado como hecho.`);
    } catch (error) {
      console.error("Error al marcar como hecho:", error);
    }

    // Llamar a la función fetchDatos al cargar el componente
  };

  return (
    <MyContext_Hecho.Provider value={{ hecho, HandleHecho }}>
      {children}
    </MyContext_Hecho.Provider>
  );
};
