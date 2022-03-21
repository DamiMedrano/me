import React from 'react';
import styled from 'styled-components';
import DropdownMenu from './DropdownMenu';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HeaderComponent>
      <div className='header'>
        <Link to='/'>
          <HeaderLogo>
            <h1>dm</h1>
          </HeaderLogo>
        </Link>
      </div>
      <DropdownMenu />
    </HeaderComponent>
  );
};
export default Header;

const HeaderComponent = styled.div`
  display: flex;
  height: 60px;
  background: #202020;
  justify-content: space-between;
  align-items: center;
`;

const HeaderLogo = styled.div`
  color: #fafafa;
  padding: 0 8px;
  font-size: 16px;
  a {
    text-decoration: none !important;
  }
  &:hover {
    color: #00f2b7;
    cursor: pointer;
  }
`;
