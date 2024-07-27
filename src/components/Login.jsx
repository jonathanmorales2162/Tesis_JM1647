import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();  // Prevenir el comportamiento por defecto del formulario

    const loginData = {
        email: email,
        password: password
    };

    try {
        const response = await fetch('http://api.taller.digicom.com.gt/api/v1/clientes/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Error al iniciar sesión');
        }

        localStorage.setItem('jwt', data.token);  // Guardar el JWT en localStorage
        localStorage.setItem('clientId', data.clientId); // Guardar el clientId en localStorage
        navigate('/orders');  // Redirigir al usuario a la página de órdenes o dashboard

    } catch (error) {
        setError(error.message);
    }
};

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="card text-white bg-dark mb-3" style={{ minWidth: "300px" }}>
        <div className="card-header">Iniciar Sesión</div>
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="card-body">
          <input
            type="email"
            className="form-control mb-3"
            placeholder="Usuario"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="form-control mb-3"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button onClick={handleLogin} className="btn btn-primary w-100">Acceder</button>
          {error && <div className="alert alert-danger mt-3">{error}</div>}
        </div>
      </div>
    </div>
  );
};

export default Login;
