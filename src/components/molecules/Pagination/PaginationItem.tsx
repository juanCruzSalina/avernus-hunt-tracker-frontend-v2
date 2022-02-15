import React from 'react';
import styled from 'styled-components';

interface IPaginationItem{
  isActive?: boolean,
  isDisabled?: boolean
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}

const Wrapper = styled.div<IPaginationItem>`
  padding: 0 ${props => props.theme.spacing.s};
  height: ${props => props.theme.measures.m};
  border: 1px solid ${props => props.theme.colors['grey-400']};
  background-color: ${props => props.isActive ? props.theme.colors.misc : props.theme.colors.light};
  color: ${props => props.isActive ? props.theme.colors.light : props.theme.colors.misc };
  pointer-events: ${props => props.isDisabled ? 'none' : 'all'};
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const PaginationItem: React.FC<IPaginationItem> = (props) => {
  return (
    <Wrapper {...props}>
      {props.children}
    </Wrapper>
  );
};

export default PaginationItem;
