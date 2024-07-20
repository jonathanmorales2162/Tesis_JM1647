import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const OrdersContainer = styled.div`
  padding: 20px;
  background-color: #121212;
  color: #e0e0e0;
`;

const OrderItem = styled.div`
  border: 1px solid #333;
  border-radius: 8px;
  padding: 10px;
  margin: 10px 0;
  background-color: #1e1e1e;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const OrderLink = styled(Link)`
  color: #90caf9;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const OrdersList = () => {
  return (
    <OrdersContainer>
      <h1>Órdenes</h1>
      <input type="text" placeholder="Buscar" />
      {[1, 2, 3, 4].map(order => (
        <OrderItem key={order}>
          <p>Número de orden: {order}</p>
          <p>Estado: Revisión</p>
          <p>Tipo: Limpieza</p>
          <OrderLink to={`/order/${order}`}>Ver detalles</OrderLink>
        </OrderItem>
      ))}
    </OrdersContainer>
  );
};

export default OrdersList;
