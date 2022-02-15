import React, { Fragment } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { appData } from '../../../features/appData/appData';
import { filterActions } from '../../../features/filter/filters';
import { toggleModal } from '../../../features/modal/modalSlice';
import Button from '../../atoms/Button/Button';
import Text from '../../atoms/Text/Text';
import EnumItems from '../../molecules/EnumItems/EnumItems';
import NoEnumItems from '../../molecules/NoEnumItems/NoEnumItems';
import EntryForm from '../EntryForm/EntryForm';



interface IFilter {
  type: 'gear' | 'lures&trophies',
}

const Wrapper = styled.div`
  grid-area: filter;
  width: 90%;
  height: 95%;
  border: 1px solid black;
  display: grid;
  grid-template:
    [row1-start] 'typeOrTier' 20% [row1-end]
    [row2-start] 'items' auto [row2-end]
    [row3-start] 'addButton' 10% [row3-end]
    / 100%
  ;
  place-items: center;
`;

const FirstRow = styled.div`
  grid-area: typeOrTier;
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const FilterWrapper = styled.div``;

const ItemFilters = styled.div`
  grid-area: items;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
`;

const FilterText = styled.div`
  margin-bottom: ${props => props.theme.fontSizes.xs};
`;


const OtherOptions = styled.div`
  grid-area: addButton;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
`;

const Filter: React.FC<IFilter> = (props) => {

  const {tier, trophies, type, lures, items} = useAppSelector(appData)
  const { tier: selectedTiers, type: selectedTypes } = useAppSelector(filterActions)
  console.log(tier, trophies, type, lures, items);
  const dispatch = useAppDispatch()

  const handleFormModal = () => {
    dispatch(toggleModal())
  }

  return (
    <Wrapper>
      <FirstRow>
        <FilterWrapper>
          <FilterText>
            <Text size='m'>Tier filters</Text>
          </FilterText>
          <NoEnumItems use='filter' type='tier'/>
        </FilterWrapper>
        {props.type === 'lures&trophies' &&
            <FilterWrapper>
              <FilterText>
                <Text size='m'>Type filters</Text>
              </FilterText>
              <NoEnumItems use='filter' type='type'/>
            </FilterWrapper>
        }
      </FirstRow>
      <ItemFilters>
        {props.type === 'lures&trophies' &&
          <Fragment>
            {selectedTypes.includes('Lure') &&
              selectedTiers.map(tier =>
                <EnumItems type='lures' use='filter' itemTier={tier}/>)}
            {selectedTypes.includes('Trophy') &&
              selectedTiers.map(tier =>
                <EnumItems type='trophies' use='filter' itemTier={tier}/>)}
          </Fragment>}
        {props.type === 'gear' &&
          <Fragment>
            {selectedTiers.map( tier =>
              <EnumItems type='items' use='filter' itemTier={tier}/>
            )}
          </Fragment>
        }
      </ItemFilters>
      <OtherOptions>
        <Button onClick={handleFormModal}>Add Entry</Button>
      </OtherOptions>
      <EntryForm />
    </Wrapper>
    );
};

export default Filter;
