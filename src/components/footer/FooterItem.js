import React from 'react';
import styled from 'styled-components';

const FooterItem = (props) => {
  return (
    <Item>
      <a href={props.href} target='_blank' rel='noreferrer'>
        <div className={props.iconContainer}>
          <i class={props.faIcon}></i>
        </div>
        <p>{props.name}</p>
      </a>
    </Item>
  );
};

export default FooterItem;

const Item = styled.div`
  width: 100px;
  a {
    font-size: 20px;
    color: #fafafa;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    cursor: pointer;

    i {
      font-size: 28px;
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
