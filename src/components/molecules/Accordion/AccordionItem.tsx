import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import  { ILink } from '../../atoms/StyledLink/StyledLink';
import { faChevronRight, IconDefinition } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.div`
  padding: ${props => props.theme.fontSizes.s} ${props => props.theme.spacing.xxs};
  display: flex;
  align-items: center;
  text-align: center;
  background-color: ${props => props.theme.colors.light};
  transition: all .3s ease;
  &:hover{
    background-color: ${props => props.theme.colors['grey-600']};
  }
`;

const AccordionIcons = styled(FontAwesomeIcon)`
  margin-right: ${props => props.theme.spacing.xxs};
  font-size: ${props => props.theme.fontSizes.s};
`;


const AccordionLink = styled(Link)<ILink>`
  text-decoration: none;
  color: ${props => props.theme.colors.black};
  cursor: pointer;
`;

const AccordionItem: React.FC<ILink> = (props) => {
  return (
    <Wrapper>
      <AccordionLink to={props.path} {...props}>
        <AccordionIcons icon={ (props.icon) ? props.icon as IconDefinition : faChevronRight} />
        {props.text}
      </AccordionLink>
    </Wrapper>
  )
}

export default AccordionItem
