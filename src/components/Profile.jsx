import React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  padding: 20px;
  margin-left: 250px; /* To avoid overlapping with the sidebar */
  background-color: #121212;
  color: #e0e0e0;
`;

const Profile = () => {
  return (
    <ProfileContainer>
      <h1>Perfil</h1>
      <p>Información del usuario...</p>
    </ProfileContainer>
  );
};

export default Profile;
