import React, { useState } from 'react';
import styled from 'styled-components';
import DropdownMenuItem from './DropdownMenuItem';
import { Outlet } from 'react-router-dom';

const DropdownMenu = () => {
  const [clicked, setClicked] = useState(false);

  const clickHandler = (e) => {
    const menuIcon = document.getElementById('fa-bars');

    setClicked(!clicked);
    if (clicked == false) {
      menuIcon.classList.add('rotate-right');
    } else {
      menuIcon.classList.remove('rotate-right');
    }
    return;
  };

  return (
    <div onClick={clickHandler}>
      <MenuIcon>
        <i class='fa-solid fa-bars' id='fa-bars'></i>
      </MenuIcon>
      {clicked ? (
        <>
          <MenuItems>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://github.com/DamiMedrano'
            >
              <ExternalLink>Github</ExternalLink>
            </a>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://www.linkedin.com/in/damian-medrano/'
            >
              <ExternalLink>Résumé</ExternalLink>
            </a>
            {/* <DropdownMenuItem name='Portfolio' /> */}
            {/* <DropdownMenuItem name='Contact' /> */}
          </MenuItems>
          <Outlet />
        </>
      ) : (
        ''
      )}
    </div>
  );
};
export default DropdownMenu;

const MenuIcon = styled.div`
  color: #fafafa;
  padding-right: 12px;
  font-size: 28px;
  &:hover {
    color: #00f2b7;
    cursor: pointer;
  }
`;

const MenuItems = styled.nav`
  position: absolute;
  top: 60px;
  right: 0px;
  z-index: 1;
  width: 100px;
  background-color: #202020;
`;

const ExternalLink = styled.div`
  color: #fafafa;
  padding: 8px;
  font-weight: bolder;
  &:hover {
    background: #00f2b7;
    color: #202020;
    cursor: pointer;
  }
`;
