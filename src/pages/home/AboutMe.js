import React from 'react';
import styled from 'styled-components';

const AboutMe = () => {
  return (
    <AboutMeContainer>
      <div className='about' id='about-me'>
        <AboutMeBig>About me</AboutMeBig>
        <AboutMeSmall>
          I'm an enthusiastic developer that enjoys working on complex projects
          and delivering great results. I'm passionate about technology and love
          to learn and eventually master new things. I have multiple success
          stories in the development of web solutions over the last 3 years, and
          I'm always looking for new opportunities to grow up as a professional
          and a human being.
        </AboutMeSmall>
      </div>
    </AboutMeContainer>
  );
};

export default AboutMe;

const AboutMeContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 120px 20%;
  justify-content: center;
  text-align: center;
`;

const AboutMeSmall = styled.div`
  font-size: 20px;
  word-spacing: 0px;
  line-height: 28px;
`;
const AboutMeBig = styled.div`
  font-size: 32px;
  font-weight: bold;
  padding-bottom: 8px;
`;
