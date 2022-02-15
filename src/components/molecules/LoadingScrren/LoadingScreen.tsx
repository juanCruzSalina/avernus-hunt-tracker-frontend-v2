import React from 'react';
import styled, { keyframes } from 'styled-components';
import Text from '../../atoms/Text/Text';


interface ILoading {
  type: 'login' | 'redirect'
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;


const SpinningCircle = styled.div`
  width: ${props => props.theme.measures.xxl};
  height: ${props => props.theme.measures.xxl};
  border: 2px solid ${props => props.theme.colors['grey-300']};
  animation: ${rotate} 1s linear infinite;
  border-left: none;
  border-radius: 100px;
  margin-bottom: ${props => props.theme.spacing.xs};
`;

const LoadingScreen: React.FC<ILoading> = ({ type }) => {

  const loadingText: any = {
    login: <Text size='l' >Loading...</Text>,
    redirect: <Text size='l' >Redirecting to login...</Text>
  }

  return (
    <Wrapper>
      <SpinningCircle />
      {loadingText[type]}
    </Wrapper>
  );
};

export default LoadingScreen;
