import React from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';

const OrderDetailContainer = styled.div`
  padding: 20px;
  background-color: #121212;
  color: #e0e0e0;
`;

const BackButton = styled.button`
  padding: 10px;
  margin-bottom: 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #218838;
  }
`;

const OrderDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/orders');
  };

  return (
    <OrderDetailContainer>
      <BackButton onClick={handleBack}>Volver a las órdenes</BackButton>
      <h1>Orden #{id}</h1>
      <p>Número de orden: {id}</p>
      <p>Estado: Revisión</p>
      <p>Tipo: Limpieza</p>
      <p>
        Observaciones: El equipo presenta suciedad en ventiladores y adicional
        se necesita un cambio de pasta térmica.
      </p>
    </OrderDetailContainer>
  );
};

export default OrderDetail;
