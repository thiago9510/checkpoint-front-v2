import React from "react";
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom'
import LoginPage from "../pages/Login/LoginPage";
import HomePage from "../pages/Home/HomePage";
import NotFoundPage from "../pages/NotFund/NotFundPage";
import ProtectedRoute from "../components/ProtectedRouter/ProtectedRoute ";

export const AppRoutes: React.FC = () => {
    return (
        <Router>
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
        </Router>
    )
}