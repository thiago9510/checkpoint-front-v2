// ProtectedRoute.tsx
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const { isAuthenticated, loading } = useAuth();
    const location = useLocation()

    if(loading){
        //Exibe um carregamento enquanto verifia a autenticação
        return <div>Carregamndo...</div>
    }

    return isAuthenticated ? (        
        <>{children}</>
    ) : (
        <Navigate to="/login" state= {{from: location}} replace/>
    );
};

export default ProtectedRoute;
