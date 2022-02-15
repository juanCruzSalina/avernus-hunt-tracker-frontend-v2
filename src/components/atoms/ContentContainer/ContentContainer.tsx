import { rgba } from 'polished';
import React from 'react';
import styled from 'styled-components';

interface IContainer {
  gridStructure: string
  columnMeasures: string
}

const Wrapper = styled.div<IContainer>`
  grid-area: content;
  border: 2px solid black;
  width: 100%;
  height: 100%;
  align-self: center;
  justify-self: center;
  display: grid;
  grid-template: [row1-start] '${props => props.gridStructure}' 100% [row1-end] / ${props => props.columnMeasures};
  gap: ${props => props.theme.spacing.xxs};
  background-color: ${props => rgba(props.theme.colors['grey-600'], 0.9)};
  place-items: center;
`;

const ContentContainer: React.FC<IContainer> = (props) => {
  return (
    <Wrapper {...props} >
      {props.children}
    </Wrapper>
  )
};

export default ContentContainer;
