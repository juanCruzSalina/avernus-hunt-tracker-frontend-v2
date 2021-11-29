import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface ILink {
  icon?: IconDefinition,
  color: string,
  hoverColor?: string,
  text: string,
  linkTo: string
}

const CustomLink = styled(Link)<ILink>`
  width: 100%;
  text-decoration: none;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: ${(props) => props.color};
  background: none;
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  font-size: ${props => props.theme.fontSizes.l};
  transition: all .2s ease;
  &:hover{
    color: ${(props) => props.hoverColor};
    transform: translateX(5px);
  }
`;

const LinkIcon = styled.div`
  width: 17.5%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LinkText = styled.div`
  padding-left: ${props => props.theme.spacing.xxs};
`;

const StyledLink: React.FC<ILink> = (props) => {
  return (
    <CustomLink to={props.linkTo} {...props}>
      <LinkIcon>
        <FontAwesomeIcon icon={props.icon as IconDefinition} />
      </LinkIcon>
      <LinkText>
        {props.text}
      </LinkText>
    </CustomLink>
  )
}

export default StyledLink
