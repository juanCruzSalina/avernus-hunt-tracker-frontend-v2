import React from 'react'
import styled from 'styled-components';

export interface IHeading  {
  size: 'l' | 'm' | 's'
  isLight?: boolean
}

const StyledHeading = styled('h2')<IHeading>`
  height: 100%;
  width: 100%;
  font-size: ${props => (props.size === 'l')
                            ? props.theme.fontSizes.xxl
                            : (props.size === 'm')
                            ? props.theme.fontSizes.xl
                            : props.theme.fontSizes.l};
  color: ${props => (props.isLight) ? props.theme.colors.white : props.theme.colors.black};
  font-weight: normal;
`;


const Heading: React.FC<IHeading> = (props) => {
  return (
    <StyledHeading {...props} >
      {props.children}
    </StyledHeading>
  )
}

export default Heading
