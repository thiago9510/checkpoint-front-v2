//AutheContext Exemple
import { isExpired, decodeToken } from "react-jwt"
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"

interface AuthContextType {
    isAuthenticated: boolean
    loading: boolean
    login: (token: string) => void
    logout: () => void
}
//contexto de autenticação
const AuthContext = createContext<AuthContextType | undefined>(undefined)



//provedor e autenticação
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(true)
    const navigate = useNavigate();

    useEffect(() =>{
        const token = localStorage.getItem('token')
        if(token && !isExpired(token)){
            setIsAuthenticated(true)           
        } else{
            setIsAuthenticated(false)
            localStorage.removeItem('token')
            navigate('/login')
        }
        setLoading(false)//ativa para falso após a verificação inicial     
    }, [])

    const login = (token: string) => {        
        localStorage.setItem('token', token) //armazena o token se for o caso
        setIsAuthenticated(true)
    }

    const logout = () => {
        localStorage.removeItem('token')//remover o token
        setIsAuthenticated(false)
    }
    return (
        <AuthContext.Provider value={{ isAuthenticated, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

//hook para acessar o contexto
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
