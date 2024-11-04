// src/pages/LoginPage.tsx
import React, { useState, useEffect } from 'react';
import styles from "./LoginPage.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from '../../context/AuthContext';

export const Login: React.FC = () => {
    const { login, isAuthenticated } = useAuth(); // Chamar useAuth no nível do componente HOOK CHAMA PRIMEIRO
    const navigate = useNavigate();
    const location = useLocation();
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    useEffect (() =>{
        if(isAuthenticated) {
            navigate('/')
        }
    }, [isAuthenticated, navigate])
  
  //const [error, setError] = useState<string | null>(null); // Definindo o estado de erro    
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // Lógica de login pode ser adicionada aqui
        if (!username || !password) {
            alert('Por favor, preencha todos os campos.')
            return
        }

      try {
          const response = await fetch('http://localhost:3335/usuario/login', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  "usuario_email": username,
                  "usuario_password": password
              })
          })
          const data = await response.json()
          if (!response.ok) {  
              //popup                  
              alert(response)
          } else {
            //console.log(data.token)        
            login(data.token)
            const from = location.state?.from ||"/"
            navigate(from)           
              //onNotify(data.message, ToastType.SUCCESS)               
          }
      } catch (error) {
          console.error('Erro na requisição:', error)
      }
  };

  return (
      <div className={styles.container}>
          <div className={styles.loginBox}>
              <div className={styles.titleContainer}>
                  <img src='/src/assets/logo.png' alt='Logo' className={styles.logo} />
                  <h1 className={styles.title}>Check Point</h1>
              </div>
              <form onSubmit={handleSubmit}>
                  <div className={styles.inputGroup}>
                      <label htmlFor='username'>Usuário</label>
                      <input
                          type='text'
                          id='username'
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          placeholder='Usuário'
                          required
                      />
                  </div>
                  <div className={styles.inputGroup}>
                      <label htmlFor='password'>Senha</label>
                      <input
                          type='password'
                          id='password'
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder='Senha'
                          required
                      />
                  </div>
                  <button type='submit' className={styles.loginButton}>
                      Entrar
                  </button>
                  <a href='#' className={styles.forgotPassword}>
                      Esqueci minha senha
                  </a>
              </form>
              <footer className={styles.footer}>Rede Doctum - Ciência da Computação</footer>
          </div>
      </div>
  );
};


export default Login;
