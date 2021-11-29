import React, { useState } from 'react'
import styled from 'styled-components';
import Text from '../../atoms/Text/Text';

export interface IAccordion {
  title: string,
  options: string[],
}

const AccordionMain = styled.div`
  width: 80%;
  `;

const AccordionItems = styled.div`
  padding: ${props => props.theme.spacing.xxs} 0 0 ${props => props.theme.spacing.xxs};
`;

const AccordionOption = styled.div`
  height: ${props => props.theme.measures.m};
  `;

const AccordionHeader = styled.div`
  border:  1px solid black;
  height: 100%;
  display: flex;
  align-items: center;
  padding: ${props => props.theme.fontSizes.s} ${props => props.theme.spacing.xxs};
`;

const Accordion: React.FC<IAccordion> = (props) => {

  const [isActive, setIsActive] = useState(false)
  const [selectedOption, setSelectedOption] = useState('')

  const toggle = () => {
    setIsActive(!isActive)
  }

  const handleSelect = (option: string) =>{
    setSelectedOption(option)
    toggle()
  }

  return (
      <AccordionMain>
        <AccordionHeader onClick={toggle}>
          <Text size={'m'}>
            {selectedOption || props.title}
          </Text>
        </AccordionHeader>
        {isActive && (<AccordionItems>
          {props.options.map(option =>
            <AccordionOption onClick={() => handleSelect(option)} >
              <Text size={'m'}>{option}</Text>
            </AccordionOption>)}
          </AccordionItems>)}
      </AccordionMain>
  )
}

export default Accordion
