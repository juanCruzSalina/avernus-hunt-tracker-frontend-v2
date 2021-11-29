import React from 'react'
import styled from 'styled-components';
import { useAppDispatch } from '../../../app/hooks';
import { toggleModal } from '../../../features/modal/modalSlice';
import Button from '../../atoms/Button/Button';
import Heading from '../../atoms/Heading/Heading';
import ModalContainer from '../../atoms/ModalContainer/ModalContainer'
import Text from '../../atoms/Text/Text';

export interface IDialog {
  title: string,
  content: string,
  onConfirm: Function,
  onCancel: Function
}

const DialogWrapper = styled.div`
  width: 30%;
  height: 30%;
  background-color: ${props => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 ${props => props.theme.spacing.m};
`;

const TextContainer = styled.div`
  align-self: flex-start;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  `;

const ButtonsContainer = styled.div`
  width: 60%;
  align-self: flex-end;
  display: flex;
  justify-content: space-between;
`;

const Dialog: React.FC<IDialog> = (props) => {

  const dispatch = useAppDispatch()

  const onConfirmAction = () => {
    dispatch(toggleModal())
    props.onConfirm()
  }

  const onCancelAction = () => {
    dispatch(toggleModal())
    props.onCancel()
  }

  return (
    <ModalContainer>
      <DialogWrapper onClick={e => e.stopPropagation()}>
        <TextContainer>
          <Heading size={'s'}>{props.title}</Heading>
          <Text size={'m'} >{props.content}</Text>
        </TextContainer>
        <ButtonsContainer>
          <Button isPrimary onClick={onConfirmAction}>Confirm</Button>
          <Button onClick={onCancelAction}>Cancel</Button>
        </ButtonsContainer>
      </DialogWrapper>
    </ModalContainer>
  )
}

export default Dialog
