import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Login from './components/Login';
import OrdersList from './components/OrdersList';
import OrderDetail from './components/OrderDetail';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';

const MainContainer = styled.div`
  transition: margin-left 0.3s;
  margin-left: ${(props) => (props.isOpen ? '250px' : '50px')};
`;

const App = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const showDashboard = location.pathname !== '/';

  return (
    <div>
      {showDashboard && <Dashboard isOpen={isOpen} toggleSidebar={toggleSidebar} />}
      <MainContainer isOpen={isOpen}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/orders" element={<OrdersList />} />
          <Route path="/order/:id" element={<OrderDetail />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </MainContainer>
    </div>
  );
};

const WrappedApp = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;
