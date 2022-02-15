import React from 'react'
import { Outlet } from 'react-router-dom';

import styled from 'styled-components';
import { rgba } from 'polished';

import Button from '../../atoms/Button/Button';
import Heading from '../../atoms/Heading/Heading';
import Logo from '../../atoms/Logo/Logo';
import Text from '../../atoms/Text/Text';
import { useAuth0 } from '@auth0/auth0-react';

const HeroTopbar = styled.div`
  display: flex;
  grid-area: topbar;
  background: ${props => rgba(props.theme.colors.primary, .7)};
  align-items: center;
  justify-content: left;
`;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template:
    [row1-start] 'topbar ' 10% [row1-end]
    [row2-start] 'content ' 70% [row2-end]
    / auto;
  background: ${props => props.theme.colors['grey-500']};
`;

const PageText = styled.div`
  justify-self: center;
  text-align: center;
  grid-area: content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 70%;
`;

const LogoContainer = styled.div`
  width: 10%;
`;

const Hero: React.FC = () => {

  const { loginWithRedirect } = useAuth0()

  const handleLogIn = () => {
    loginWithRedirect()
  }


  return (
    <Wrapper>
      <HeroTopbar>
        <LogoContainer>
          <Logo />
        </LogoContainer>
      </HeroTopbar>
      <PageText>
        <Heading size='l'>
          Avernus Hunt Tracker
        </Heading>
        <Text size='l'>
          Keep track of your guild or alliance hunt material, donations of lures/trophies. With a wishlist to record a petition for gear, alongside an awarded list to keep track who received what piece
        </Text>
        <Button onClick={handleLogIn}>
          <Text size='l'>
            Log in
          </Text>
        </Button>
      </PageText>
      <Outlet/>
    </Wrapper>
  )
}

export default Hero
