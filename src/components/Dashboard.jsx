import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Dashboard = ({ isOpen, toggleSidebar, setIsOpen }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsOpen(false);  // Asegurarse de cerrar el Dashboard
    localStorage.removeItem('userId');  // Suponiendo que guardas el userId en localStorage
    navigate('/login');  // Ajusta esto según tu ruta de login
  };

  const sidebarClass = `d-flex flex-column bg-dark text-white ${isOpen ? 'w-250px' : 'w-50px'}`;  // Clase para controlar el ancho del sidebar

  return (
    <div className={`${sidebarClass} position-fixed h-100 overflow-auto transition-width`} style={{ zIndex: 1000 }}>
      <button onClick={toggleSidebar} className="btn btn-dark d-flex align-items-center justify-content-center p-3">
        <FaBars />
      </button>
      {isOpen && (
        <>
          <Link to="/orders" className="btn btn-dark text-start text-white py-3 px-4 w-100">Órdenes</Link>
          <Link to="/profile" className="btn btn-dark text-start text-white py-3 px-4 w-100">Perfil</Link>
          <Link to="/messages" className="btn btn-dark text-start text-white py-3 px-4 w-100">Mensajes</Link>
          <button onClick={handleLogout} className="btn btn-success text-start py-3 px-4 w-100">Cerrar sesión</button>
        </>
      )}
    </div>
  );
};

export default Dashboard;
