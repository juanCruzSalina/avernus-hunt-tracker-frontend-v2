import { rgba } from 'polished';
import React from 'react'
import styled from 'styled-components';

const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => rgba( props.theme.colors.dark, 0.3 )};
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
`;

export const ModalContainer: React.FC = (props) => {
  return (
    <ModalBackground>
      {props.children}
    </ModalBackground>
  )
}
