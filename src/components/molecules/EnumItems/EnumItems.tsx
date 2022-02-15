import React from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { appData } from '../../../features/appData/appData';
import { addFilter, removeFilter } from '../../../features/filter/filters';
import ItemSelector from '../../atoms/ItemSelector/ItemSelector';

interface IEnumItems {
  itemTier: '1' | '2' | '3' | string
  type: 'items' | 'lures' | 'trophies',
  use: 'filter' | 'form',
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EnumItems: React.FC<IEnumItems> = (props) => {

  const { lures, items, trophies } = useAppSelector(appData)
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
      {props.type === 'items' &&
        items[props.itemTier].map((item, idx) =>
          <ItemSelector
            key={idx}
            value={item}
            onSelect={() => handleSelect(props.type, item)}
            onDeselect={() => handleDeselect(props.type, item)}
          />)}
      {props.type === 'lures' &&
        lures[props.itemTier].map((item, idx) =>
          <ItemSelector
            key={idx}
            value={item}
            onSelect={() => handleSelect(props.type, item)}
            onDeselect={() => handleDeselect(props.type, item)}
          />)}
      {props.type === 'trophies' &&
        trophies[props.itemTier].map((item, idx) =>
          <ItemSelector
            key={idx}
            value={item}
            onSelect={() => handleSelect(props.type, item)}
            onDeselect={() => handleDeselect(props.type, item)}
          />)}
    </Wrapper>
  );
};

export default EnumItems;
