import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';

//components
import AboutMe from './AboutMe';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <HeroContainer>
        <HeroImage>
          <img
            src='https://i.pinimg.com/originals/52/06/61/5206618ecfa6e78cda0f74f80babb70f.jpg'
            alt='background'
          />
          <HeroTextContainer>
            <div>
              <HeroSmallText>Hi, I'm</HeroSmallText>
              <HeroBigText>Damian Medrano,</HeroBigText>
              <HeroSmallText>
                <Typewriter
                  options={{
                    strings: [
                      'Front End developer',
                      'Software Engineer',
                      'Web Designer',
                      'Tech Savvy Person',
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </HeroSmallText>
            </div>
          </HeroTextContainer>
        </HeroImage>
      </HeroContainer>
      <AboutMe />
      <Footer />
    </>
  );
};

export default Home;

const HeroContainer = styled.div`
  position: relative;
`;

const HeroTextContainer = styled.div`
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

const HeroImage = styled.div`
  width: 100%;
  height: 95vh;
  margin: 0 auto;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    filter: brightness(60%);
    margin: 0 auto;
  }
`;

const HeroSmallText = styled.div`
  font-size: 28px;
`;
const HeroBigText = styled.div`
  font-size: 40px;
  font-weight: bold;
`;
