import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, } from 'react-router-dom'
import LoginPage from "../pages/Login/LoginPage";
import HomePage from "../pages/Home/HomePage";
import NotFoundPage from "../pages/NotFund/NotFundPage";
import ProtectedRoute from "../components/ProtectedRouter/ProtectedRoute ";
import { MuiNavbar } from "../components/NavBar/MuiNavbar";

export const AppRoutes: React.FC = () => {
    const location = useLocation(); //pega localização atual

    return (
        <>
            {location.pathname !== '/login' && <MuiNavbar />} {/* Renderiza a Navbar se não estiver na página de login */}

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
                <Route path="*" element={<NotFoundPage />} />{/* Rota de "página não encontrada" */}
            </Routes>
        </>
    )
}