import React from 'react';
import FooterItem from './FooterItem';
import styled from 'styled-components';

const Footer = () => {
  const linkedInURL = 'https://www.linkedin.com/in/damian-medrano/';
  const emailContact = 'mailto:medrano.e.damian@hotmail.com';
  const GithubURL = 'https://github.com/DamiMedrano';

  return (
    <FooterContainer>
      <FooterSection>
        <FooterItem
          href={linkedInURL}
          name='LinkedIn'
          faIcon='fa-brands fa-linkedin-in'
          iconContainer='linkedIn-icon'
        />
        <FooterItem
          href={emailContact}
          name='eMail'
          faIcon='fa solid fa-envelope'
          iconContainer='email-icon'
        />
        <FooterItem
          href={GithubURL}
          name='Github'
          faIcon='fa-brands fa-github'
          iconContainer='github-icon'
        />
      </FooterSection>
      <CreditsSection>
        Made with <i class='fa-solid fa-heart heart-icon' /> and
        <i class='fa-brands fa-react react-icon' /> by Damian Medrano
      </CreditsSection>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  position: relative;
  height: 160px;
  background: #202020;
  color: #fafafa;
  text-align: center;
  }
`;
const FooterSection = styled.section`

  display: flex;
  justify-content: center;
  padding-top: 36px;
  }
`;

const CreditsSection = styled.section`
  color: #fafafa;
  position: absolute;
  bottom: 8px;
  display: flex;
  justify-content: center;
  width: 100%;
  i {
    padding: 0 4px;
  }
  :hover {
    .heart-icon {
      color: #ff2b2b;
    }
    .react-icon {
      color: #61dbfb;
    }
  }
`;
