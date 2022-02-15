import React, { useState } from 'react'
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { rgba } from 'polished';


import { useAppSelector } from '../../../app/hooks';
import { accordionOptions } from '../../../features/accordion/accordionInfoSlice';
import { userData } from '../../../features/user/userSlice';
import { faSignOutAlt, faSortDown } from '@fortawesome/free-solid-svg-icons';

import Avatar from '../../atoms/Avatar/Avatar';
import Button from '../../atoms/Button/Button';
import Text from '../../atoms/Text/Text';
import AccordionItem from './AccordionItem';


interface IAccodionItems {
  show: boolean
}

const AccordionMain = styled.div`
  grid-area: accordion;
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.colors.primary};

`;

const AccordionHeader = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 1px white solid;
  border-radius: ${props => props.theme.radius.rounded};
  cursor: pointer;
  transition: all .3s ease;
  &:hover{
    background-color: ${props => rgba(props.theme.colors.secondary, 0.3 )};
  }
`;

const HeaderText = styled.div``;

const AccordionIcons = styled(FontAwesomeIcon)`
  text-align: center;
  font-size: ${props => props.theme.fontSizes.l};
  color: ${props => props.theme.colors.white};
`;

const AccordionItemsContainer = styled.div`
  width: 80%;
  position: relative;
  z-index: 1;
`;

const AccordionItems = styled.div<IAccodionItems>`
  width: 100%;
  position: absolute;
  opacity: ${ props => (props.show) ? 1 : 0 };
`;

const LogOutButton = styled(Button)`
  width: 100%;
  border: none;
  color: ${props => props.theme.colors.black};
  background-color: ${props => props.theme.colors.light};
  transition: all .3s ease;
  display: flex;
  align-items: center;
  padding-left: ${props => props.theme.fontSizes.m};
  &:hover{
    background-color: ${props => props.theme.colors['grey-600']}};
`;

const LBText = styled.div`
  margin-left: ${props => props.theme.spacing.xxs};
`;

const Accordion: React.FC = () => {

  const { logout } = useAuth0()
  const [isActive, setIsActive] = useState(false)
  const items = useAppSelector(accordionOptions)
  const {nickname, picture} = useAppSelector(userData)


  const handleLogOut = () => {
    logout()
  }

  const toggle = () => {
    setIsActive(!isActive)
  }

  return (
    <AccordionMain>
      <AccordionHeader onClick={toggle}>
        <Avatar size={'s'} image={picture} />
        <HeaderText>
          <Text isLight size='m' >
            {nickname}
          </Text>
        </HeaderText>
        <AccordionIcons icon={faSortDown} />
      </AccordionHeader>
      <AccordionItemsContainer>
        <AccordionItems show={isActive}>
          {items.map((item, idx) => <AccordionItem key={idx} {...item} />)}
          <LogOutButton onClick={handleLogOut}>
            <FontAwesomeIcon icon={faSignOutAlt}/>
            <LBText>
              <Text size='m' >
                Log Out
              </Text>
            </LBText>
          </LogOutButton>
        </AccordionItems>
      </AccordionItemsContainer>
    </AccordionMain>
  )
}

export default Accordion
