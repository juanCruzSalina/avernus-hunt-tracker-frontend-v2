import React from 'react'
import styled from 'styled-components';
import AHTlogo from './AHTlogo.png'

const Wrapper = styled.div`
  grid-area: logo;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 90%;
`;

const StyledLogo = styled.img`
  width: 100%;
  height: 100%;
`;

const Logo: React.FC = () => {
  return (
    <Wrapper>
      <StyledLogo src={AHTlogo} />
    </Wrapper>
  )
}

export default Logo
