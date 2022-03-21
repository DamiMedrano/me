import React from 'react';
import styled from 'styled-components';

const FooterItem = (props) => {
  return (
    <Item>
      <a href={props.href} target='_blank' rel='noreferrer'>
        <i class={props.faIcon}></i>
        <p>{props.name}</p>
      </a>
    </Item>
  );
};

export default FooterItem;

const Item = styled.section`
  width: 100px;
  a {
    font-size: 20px;
    color: #fafafa;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    i {
      font-size: 40px;
      color: #e4e4e4;
    }
    &:hover {
      .linkedIn-icon {
        color: #0072b1;
      }
      .whatsapp-icon {
        color: #25d366;
      }
      .email-icon {
        color: #ff7423;
      }
      .github-icon {
        color: #a750b0;
        // background: -webkit-linear-gradient(#a750b0, #391d66);
        // -webkit-background-clip: text;
        // -webkit-text-fill-color: transparent;
      }
    }
  }
`;
