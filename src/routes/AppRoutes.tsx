import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom'
import LoginPage from "../pages/Login/LoginPage";
import HomePage from "../pages/Home/HomePage";
import NotFoundPage from "../pages/NotFund/NotFundPage";
import ProtectedRoute from "../components/ProtectedRouter/ProtectedRoute ";
import PontoEletronico from "../pages/PontoEletronico/PontoEletronico";

export const AppRoutes: React.FC = () => {
    const location = useLocation(); //pega localização atual

    const notAllowed = ['/login', '/404']

    return (
        <>
            {!notAllowed.includes(location.pathname)}
            {/* Não renderiza a componente caso a página não uma página permitida */}

            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <HomePage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/ponto/eletronico"
                    element={
                        <ProtectedRoute>
                            <PontoEletronico />
                        </ProtectedRoute>
                    }
                />

                <Route path="/404" element={<NotFoundPage />} />{/* Rota de "página não encontrada" */}
                <Route path="*" element={<Navigate to="/404" replace />} />{/* Redireciona qualquer rota desconhecida para "/404" */}
            </Routes>
        </>
    )
}