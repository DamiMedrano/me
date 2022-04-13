import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <Container>
      <i class='fa-solid fa-spinner spin-right-infinite'></i>
    </Container>
  );
};

export default Loader;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .spin-right-infinite {
    font-size: 32px;
  }
`;
