import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const OrdersList = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);  // Iniciar el estado de carga
      setError('');  // Limpiar cualquier error previo
      const token = localStorage.getItem('jwt');  // Recuperar el token JWT desde el localStorage
      // const clientId = localStorage.getItem('clientId');  // Recuperar el clientId desde el localStorage
      const clientId = 28;
      try {
        const response = await fetch(`http://api.taller.digicom.com.gt/api/v1/clientes/os/${clientId}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        const data = await response.json();  // Parsear la respuesta JSON
        //console.log(data);  // Verificar la estructura de los datos devueltos por la API

        if (!response.ok) {
          throw new Error(data.message || 'Error al obtener las órdenes');
        }

        setOrders(data.result);  // Guardar la respuesta de la API en el estado orders
        //console.log(data.result);  // Verificar la estructura de result

      } catch (error) {
        setError(error.message);  // Guardar cualquier error en el estado error
      } finally {
        setLoading(false);  // Terminar el estado de carga
      }
    };

    fetchOrders();  // Llamar a la función fetchOrders para iniciar la llamada a la API
  }, []);

  return (
    <div className="container mt-3 p-3 bg-dark text-light">
      <h1>Órdenes de Servicio</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      {loading && <p className="text-white">Cargando...</p>}
      {orders.length > 0 ? (
        orders.map(order => {
          return (
            <div key={order.idOs} className="card text-light bg-secondary mb-3">
              <div className="card-header">Orden #{order.idOs}</div>
              <div className="card-body">
                <h5 className="card-title">Estatus: {order.status}</h5>
                <p className="card-text">Descripción: <span dangerouslySetInnerHTML={{ __html: order.descricaoProduto }}></span></p>
                <Link to={`/orders/${order.idOs}`} className="btn btn-primary">Ver Detalles</Link>
              </div>
            </div>
          );
        })
      ) : (
        !loading && <p className="text-white">No hay órdenes disponibles.</p>
      )}
    </div>
  );
};

export default OrdersList;
