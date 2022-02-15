import React from 'react'
import styled from 'styled-components';
import { useAppSelector } from '../../../app/hooks'
import { selectMenu } from '../../../features/sidebar/sidebarSlice'
import StyledLink from '../../atoms/StyledLink/StyledLink';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  grid-area: sidebar;
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  padding-top: ${props => props.theme.spacing.m};
`;

const SidebarLink = styled(StyledLink)`
  padding: ${props => props.theme.spacing.xxs} 0 ;
  margin-left: ${props => props.theme.fontSizes.s};
`;

const Sidebar: React.FC = () => {
  const items  = useAppSelector(selectMenu)
  return (
    <Wrapper>
      {items.map((item, idx) => <SidebarLink key={idx} {...item} />
      )}
    </Wrapper>
  )
}

export default Sidebar
