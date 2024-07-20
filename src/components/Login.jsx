import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #121212;
  color: #e0e0e0;
`;

const Input = styled.input`
  width: 80%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #333;
  border-radius: 4px;
  background-color: #1e1e1e;
  color: #e0e0e0;
`;

const Button = styled.button`
  width: 80%;
  padding: 10px;
  margin: 10px 0;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #218838;
  }
`;

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Aquí puedes agregar la lógica de autenticación
    navigate('/orders');
  };

  return (
    <LoginContainer>
      <h1>Iniciar Sesión</h1>
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Button onClick={handleLogin}>Log In</Button>
      <a href="#" style={{ color: '#90caf9' }}>Forgot your password?</a>
    </LoginContainer>
  );
};

export default Login;
