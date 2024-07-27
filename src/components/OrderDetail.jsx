import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const OrderDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await fetch(`http://localhost:3000/orders/${id}`);

        if (!response.ok) {
          const { message } = await response.json();
          setError(message);
          return;
        }

        const data = await response.json();
        setOrder(data);
      } catch (error) {
        setError('Error al conectar con el servidor');
      }
    };

    fetchOrder();
  }, [id]);

  const handleBack = () => {
    navigate('/orders');
  };

  return (
    <div className="container mt-3 p-3 bg-dark text-white" style={{ minHeight: '100vh' }}>
      <button onClick={handleBack} className="btn btn-primary mb-3">Volver a las órdenes</button>
      {error && <div className="alert alert-danger">{error}</div>}
      {order ? (
        <div className="card bg-secondary text-white p-3 rounded">
          <h1>Detalle de la Orden #{order.OrderID}</h1>
          <p>Número de orden: {order.OrderID}</p>
          <p>Estado: {order.Status}</p>
          <p>Tipo: {order.Type}</p>
          <p>Observaciones: {order.Observations}</p>
          <p>Creado: {new Date(order.CreatedAt).toLocaleString()}</p>
          <p>Actualizado: {new Date(order.UpdatedAt).toLocaleString()}</p>
        </div>
      ) : (
        <div>Cargando...</div>
      )}
    </div>
  );
};

export default OrderDetail;
