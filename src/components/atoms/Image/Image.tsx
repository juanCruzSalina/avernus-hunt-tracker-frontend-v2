import React from 'react'
import styled from 'styled-components';

interface IImage {
  url: string
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const StyledImage = styled.img`
  height: 100%;
  position: absolute;
  left:0;
`;

const Image: React.FC<IImage> = (props) => {
  return (
    <Wrapper>
      <StyledImage src={props.url} alt={'backgroundImage'} />
    </Wrapper>
  )
}

export default Image