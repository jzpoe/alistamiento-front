import React, { createContext, useState } from 'react';

export const MyContext_Hecho = createContext();

export const Context_Hecho = ({ children }) => {
    const [hecho, setHecho] = useState({});

    const HandleHecho = async (id) => {
        try {
            setHecho((prev) => ({ ...prev, [id]: true }));

            const response = await fetch(`https://alistamiento-backend.vercel.app/api/hecho/${id}`, {
            //const response = await fetch(`http://localhost:3001/api/hecho/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ hecho: true })
            });

            if (!response.ok) throw new Error('Error al marcar como hecho');

            // Aquí puedes recibir el resultado si lo necesitas
        } catch (error) {
            console.error('Error al marcar como hecho:', error);
        }
    };

    return (
        <MyContext_Hecho.Provider value={{ hecho, HandleHecho }}>
            {children}
        </MyContext_Hecho.Provider>
    );
};

