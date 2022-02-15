import React from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { appData } from '../../../features/appData/appData';
import { addFilter, removeFilter } from '../../../features/filter/filters';
import ItemSelector from '../../atoms/ItemSelector/ItemSelector';

interface IItemsProps {
  type: 'tier' | 'type',
  use: 'filter' | 'form',
}

const Wrapper = styled.div`
`;


const NoEnumItems: React.FC<IItemsProps> = (props) => {

  const { tier, type } = useAppSelector(appData)
  const dispatch = useAppDispatch()

  const handleSelect = (dataType: string, entry: string) => {
    if (props.use === 'filter') {
      return dispatch(addFilter({dataType: dataType, entry: entry}))
    }
  }

  const handleDeselect = (dataType: string, entry: string) => {
    if (props.use === 'filter') {
      return dispatch(removeFilter({dataType: dataType, entry: entry}))
    }
  }

  return (
    <Wrapper>
      {props.type === 'tier' &&
        tier.map((item, idx) =>
          <ItemSelector
            key={idx}
            onSelect={() => handleSelect('tier', item)}
            onDeselect={() => handleDeselect('tier', item)}
            value={item}
            tier
          />)}
      {props.type === 'type' &&
        type.map((item, idx) =>
          <ItemSelector
            key={idx}
            onSelect={() => handleSelect('type', item)}
            onDeselect={() => handleDeselect('type', item)}
            value={item}
          />)}
    </Wrapper>
  );
};

export default NoEnumItems;
