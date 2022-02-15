import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect } from 'react'
import styled from 'styled-components';
import { useAppDispatch } from '../../../app/hooks';
import { getUser } from '../../../features/user/userSlice';
import Logo from '../../atoms/Logo/Logo';
import Accordion from '../../molecules/Accordion/Accordion';

const Wrapper = styled.div`
  grid-area: topbar;
  width: 100%;
  display: grid;
  grid-template:
    [row1-start] 'logo . .' auto [row1-end]
    [row1-start] 'logo . accordion' 50% [row1-end]
    [row1-start] 'logo . .' auto [row1-end]
    / 20% auto 15%;
  align-content: center;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.primary};
`;

const Topbar: React.FC = () => {

  const dispatch = useAppDispatch()
  const { user } = useAuth0()

  useEffect(() => {
    dispatch(getUser(user))
  });

  return (
    <Wrapper>
      <Logo />
      <Accordion />
    </Wrapper>
  )
}

export default Topbar
