import React from 'react'
import styled from 'styled-components';


interface IOption {
  value?: string | number
  name?: string
  onClick: (e: React.MouseEvent<HTMLDivElement>) => any
}

const Wrapper = styled.div<IOption>`
  height: ${props => props.theme.measures.m};
  width: 100%;
`;


const AccordionOption: React.FC<IOption> = (props) => {
  return (
    <Wrapper {...props}>
      {props.children}
    </Wrapper>
  )
}

export default AccordionOption
