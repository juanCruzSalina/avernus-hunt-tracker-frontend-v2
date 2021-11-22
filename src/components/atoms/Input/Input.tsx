import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import styled from 'styled-components';

export interface IInputText {
  placeholder: string,
  icon?: IconDefinition
}

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.colors.light};
  padding: .75rem;
  color: ${(props) => props.theme.colors.dark};
`;

const StyledInput = styled.input`
  font-size: ${props => props.theme.fontSizes.m};
  color: ${(props) => props.theme.colors.dark};
  background: transparent;
  outline: none;
  border: none;
  padding: .65rem ${props => props.theme.spacing.xxs};
  &::-webkit-input-placeholder {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.colors.white};
  width: fit-content;
  border: 1px solid ${(props) => props.theme.colors['grey-600']};
  transition: all ease 0.3s;
  &:hover {
    box-shadow: ${props => props.theme.shadows.withShadow}
  }
`;

const Input: React.FC<IInputText> = (props) => {
  return (
    <Wrapper>
      <StyledInput placeholder={props.placeholder}/>
      {(props.icon) ? (
        <IconContainer>
          <FontAwesomeIcon icon={props.icon as IconDefinition} />
        </IconContainer>
      ) : null}
    </Wrapper>
  )
}

export default Input
