import React from 'react';
import styled from 'styled-components';
import Heading from '../../atoms/Heading/Heading';
import ModalContainer from '../../atoms/ModalContainer/ModalContainer';

const Wrapper = styled.div`
  width: 90%;
  height: 90%;
  background-color: ${props => props.theme.colors.light};
  box-shadow: ${props => props.theme.shadows.withShadow};
  padding: ${props => props.theme.measures.xxs};
`;

const ItemSelectors = styled.div`
`;

const EntryForm: React.FC = () => {
  return(
    <ModalContainer>
      <Wrapper onClick={e => e.stopPropagation()}>
        <Heading size='s'>Add an entry:</Heading>
        <ItemSelectors>
          
        </ItemSelectors>
      </Wrapper>
    </ModalContainer>
  );
};

export default EntryForm;
