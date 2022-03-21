import React from 'react';
import styled from 'styled-components';
import Header from '../../components/header/Header';

const NotFound = () => {
  return (
    <>
      <Header />
      <NotFoundContainer>
        <img
          src='https://juan314.files.wordpress.com/2013/02/nasa-bruce-mccandless-freeflying-astronaut-middle-of-space.jpg?w=1200'
          alt='background'
        />
        <NotFoundText>
          <h1>404</h1>
          <p>PAGE NOT FOUND</p>
        </NotFoundText>
      </NotFoundContainer>
    </>
  );
};

export default NotFound;

const NotFoundContainer = styled.div`
  position: absolute;
  top: 60px;
  bottom: 0;
  right: 0;
  left: 0;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    filter: brightness(60%);
    margin: 0 auto;
  }
`;

const NotFoundText = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fafafa;
`;
