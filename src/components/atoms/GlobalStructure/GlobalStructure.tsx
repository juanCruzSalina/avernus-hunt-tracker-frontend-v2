import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template:
    [row1-start] 'topbar topbar' 10% [row1-end]
    [row2-start] 'sidebar content' auto [row2-end]
    / 12.5% auto
  ;
`;

const GlobalStructure: React.FC = (props) => {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  )
}

export default GlobalStructure
