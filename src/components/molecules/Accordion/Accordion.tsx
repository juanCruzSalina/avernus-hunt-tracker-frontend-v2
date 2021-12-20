import React, { useState } from 'react'
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { accordionOptions } from '../../../features/accordion/accordionInfoSlice';
import { setType } from '../../../features/accordion/accordionSlice';
import AccordionOption from './AccordionOption';
export interface IAccordion {
  type: 'gear' | 'trophy' | 'lure' | 'tier',
}

const AccordionMain = styled.div`
  width: 80%;
  `;

const AccordionItems = styled.div`
  padding: ${props => props.theme.spacing.xxs} 0 0 ${props => props.theme.spacing.xxs};
`;

const AccordionHeader = styled.div`
  border:  1px solid black;
  height: 100%;
  display: flex;
  align-items: center;
  padding: ${props => props.theme.fontSizes.s} ${props => props.theme.spacing.xxs};
`;

const Accordion: React.FC<IAccordion> = (props) => {

  const dispatch = useAppDispatch()
  const [isActive, setIsActive] = useState(false)
  const [selectedOption, setSelectedOption] = useState('Select an Item...')
  const { lure, gear, trophy, tier, type } = useAppSelector(accordionOptions)

  const toggle = () => {
    setIsActive(!isActive)
  }

  const handleSelect = (e: React.MouseEvent<HTMLDivElement>) => {
    let key = e.currentTarget.getAttribute('name')
    console.log(key)
    let value = e.currentTarget.getAttribute('value')
    dispatch(setType(`{${key}: ${value}}`))
  }


  const conditionalRendering:any = {
    tier: tier.map((option) => {
      return (
        <AccordionOption name={'tier'} value={option} onClick={handleSelect}>
          {option}
        </AccordionOption>
      )})
  }

  return (
      <AccordionMain>
        <AccordionHeader  onClick={toggle} >
          {selectedOption}
        </AccordionHeader>
        {isActive && (
          <AccordionItems>
            <AccordionOption onClick={() => setSelectedOption('Select an Option...')}>
              Select an Option...
            </AccordionOption>
            {conditionalRendering[props.type]}
          </AccordionItems>)}
      </AccordionMain>
  )
}

export default Accordion
