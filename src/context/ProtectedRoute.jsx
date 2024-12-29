import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/ContextLogin';

export const ProtectedRoute = ({ element: Component, ...rest }) => {
    const { isAuthenticated } = useAuth();

    return isAuthenticated ? (
        <Component {...rest} />
    ) : (
        <Navigate to="/" replace /> // Redirige al login si no está autenticado
    );
};