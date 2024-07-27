import React, { useState } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Login from './components/Login';
import OrdersList from './components/OrdersList';
import OrderDetail from './components/OrderDetail';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';

const MainContainer = styled.div`
  transition: margin-left 0.3s;
  margin-left: ${(props) => (props.$isOpen ? '250px' : '0')};
`;

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    setIsOpen(false);  // cerrar Dashboard al desloguearse
    localStorage.removeItem('userId');  //Eliminar el userId del localStorage
    navigate('/login');  // Redirección al componente de login
  };

  const showDashboard = location.pathname !== '/login';

  return (
    <div>
      {showDashboard && <Dashboard isOpen={isOpen} toggleSidebar={toggleSidebar} setIsOpen={setIsOpen} handleLogout={handleLogout} />}
      <MainContainer $isOpen={isOpen}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/orders" element={<OrdersList />} />
          <Route path="/orders/:id" element={<OrderDetail />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </MainContainer>
    </div>
  );
};

export default App;
