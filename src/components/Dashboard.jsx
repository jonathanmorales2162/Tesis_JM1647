import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const SidebarContainer = styled.div`
  position: fixed;
  height: 100%;
  width: ${(props) => (props.isOpen ? '250px' : '50px')};
  background-color: #1e1e1e;
  padding-top: 20px;
  transition: width 0.3s;
  overflow: hidden;
  z-index: 1000; /* Ensure the sidebar is on top */
`;

const SidebarLink = styled(Link)`
  display: block;
  padding: 15px 20px;
  text-decoration: none;
  color: #e0e0e0;
  white-space: nowrap;
  &:hover {
    background-color: #333;
  }
`;

const LogoutButton = styled.button`
  display: block;
  width: 100%;
  padding: 15px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-align: left;
  white-space: nowrap;
  &:hover {
    background-color: #218838;
  }
`;

const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 15px;
  background-color: #1e1e1e;
  color: #e0e0e0;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #333;
  }
`;

const Dashboard = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Aquí puedes agregar la lógica de deslogueo
    navigate('/');
  };

  return (
    <SidebarContainer isOpen={isOpen}>
      <ToggleButton onClick={toggleSidebar}>
        <FaBars />
      </ToggleButton>
      {isOpen && (
        <>
          <SidebarLink to="/orders">Órdenes</SidebarLink>
          <SidebarLink to="/profile">Perfil</SidebarLink>
          <LogoutButton onClick={handleLogout}>Cerrar sesión</LogoutButton>
        </>
      )}
    </SidebarContainer>
  );
};

export default Dashboard;
