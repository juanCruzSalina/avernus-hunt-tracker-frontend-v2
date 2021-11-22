import { rgba } from 'polished';
import React from 'react'
import styled from 'styled-components';

export interface IButton {
  isPrimary?: boolean,
  isRounded?: boolean,
  onClick: (event: React.MouseEvent<HTMLButtonElement>)=> any
}

const StyledButton = styled.button<IButton>`
  font-size: ${props => props.theme.fontSizes.m};
  padding: ${props => props.theme.fontSizes.xs} ${ props => props.theme.spacing.m};
  color: ${props => (props.isPrimary) ? props.theme.colors.light : props.theme.colors.dark };
  border: 1px solid ${props => props.theme.colors.dark};
  background-color: ${props => (props.isPrimary)
                        ? props.theme.colors.secondary
                        : 'transparent'};
  border-radius: ${props => (props.isRounded) ? props.theme.radius.rounded : props.theme.radius.squared};
  cursor: pointer;
  transition: all .3s ease;
  &:hover{
    background-color: ${props => (props.isPrimary) ? rgba(props.theme.colors.secondary, 0.8) : rgba(props.theme.colors['grey-700'], 0.8) };
  }
`;

const Button: React.FC<IButton> = (props) => {
  return (
    <StyledButton {...props} >
      {props.children}
    </StyledButton>
  )
}

export default Button
