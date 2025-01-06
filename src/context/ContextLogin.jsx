import React, { createContext, useContext, useState } from 'react';

// Crear el contexto
export const MyContextLogin = createContext();

// Proveedor del contexto
export const ContextLogin = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = () => setIsAuthenticated(true); // Función para iniciar sesión
    const logout = () => setIsAuthenticated(false); // Función para cerrar sesión

    return (
        <MyContextLogin.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </MyContextLogin.Provider>
    );
};

// Hook personalizado para usar el contexto
export const useAuth = () => useContext(MyContextLogin);
    