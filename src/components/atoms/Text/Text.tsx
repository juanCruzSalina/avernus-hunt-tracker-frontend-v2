import React from 'react'
import styled from 'styled-components';

export interface IText  {
  size: 'l' | 'm' | 's'
  isLight?: boolean
}

const StyledText = styled('p')<IText>`
  height: 100%;
  width: 100%;
  font-size: ${props => (props.size=== 'l')
                            ? props.theme.fontSizes.l
                            : (props.size === 'm')
                            ? props.theme.fontSizes.m
                            : props.theme.fontSizes.s};
  color: ${props => (props.isLight) ? props.theme.colors.white : props.theme.colors.black};
`;

const Text: React.FC<IText> = (props) => {
  return (
    <StyledText size={props.size} isLight={props.isLight} >
      {props.children}
    </StyledText>
  )
}

export default Text
