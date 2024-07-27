import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const OrdersList = () => {
  const [clients, setClients] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      const userId = localStorage.getItem('userId');
      if (!userId) {
        setError('No se encontró el ID del usuario');
        return;
      }

      try {
        const response = await fetch(`http://localhost:3000/users/${userId}/orders`);

        if (!response.ok) {
          const { message } = await response.json();
          setError(message);
          return;
        }

        const data = await response.json();
        setOrders(data);
      } catch (error) {
        setError('Error al conectar con el servidor');
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="container mt-3 p-3 bg-dark text-light">
      <h1>Órdenes</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      {orders.map(order => (
        <div key={order.OrderID} className="card text-light bg-secondary mb-3">
          <div className="card-header">Orden #{order.OrderID}</div>
          <div className="card-body">
            <h5 className="card-title">{order.Status}</h5>
            <p className="card-text">{order.Type}</p>
            <p className="card-text">{order.Observations}</p>
            <Link to={`/orders/${order.OrderID}`} className="btn btn-primary">Ver Detalles</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrdersList;
