import { rgba } from 'polished';
import React from 'react'
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { modalToggle, toggleModal } from '../../../features/modal/modalSlice';

export interface IModal {
  show: boolean
}

const ModalBackground = styled.div<IModal>`
  width: 100%;
  height: 100%;
  background-color: ${props => rgba( props.theme.colors.dark, 0.5 )};
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  transition: all .3s ease;
  opacity: ${props => (props.show) ? 1 : 0};
  pointer-events: ${ props => props.show ? 'all' : 'none' };

`;


const ModalContainer: React.FC = (props) => {

  const { showModal } = useAppSelector(modalToggle);
  const dispatch = useAppDispatch();

  const hideOnClick = () => dispatch(toggleModal())


  return (
    <ModalBackground show={showModal} onClick={hideOnClick} >
      {props.children}
    </ModalBackground>
  )
}

export default ModalContainer
