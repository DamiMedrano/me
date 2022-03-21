import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const DropdownMenuItem = (props) => {
  return (
    <Link to={'/' + props.name.toLowerCase()}>
      <MenuItem>{props.name}</MenuItem>
    </Link>
  );
};

export default DropdownMenuItem;

const MenuItem = styled.div`
  color: #fafafa;
  padding: 8px;
  font-weight: bolder;
  &:hover {
    background: #00f2b7;
    color: #202020;
    cursor: pointer;
  }
`;
