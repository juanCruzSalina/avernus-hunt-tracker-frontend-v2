import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

interface ISelectItem {
  tier?: boolean,
  value: string,
  onSelect: Function,
  onDeselect: Function,
}

interface IActiveItem {
  selected: boolean
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  transition: all .2s ease;
`;

const ItemText = styled.p<IActiveItem>`
  cursor: pointer;
  text-align: center;
  color: ${props => (props.selected) ? props.theme.colors.success : props.theme.colors.black};
  margin-bottom: ${props => props.theme.fontSizes.xxs};
  pointer-events: ${ props => props.selected ? 'none' : 'all' };
`;

const RemoveIcon = styled(FontAwesomeIcon)<IActiveItem>`
  cursor: pointer;
  pointer-events: ${ props => props.selected ? 'all' : 'none' };
  color: ${props => props.theme.colors.danger};
  font-size: ${props => props.theme.fontSizes.s};
  margin-left: ${props => props.theme.fontSizes.xs};
  opacity: ${props => props.selected ? 1 : 0};
`;

const ItemSelector: React.FC<ISelectItem> = (props) => {

  const [active, setActive] = useState(false);

  const handleSelect = () => {
    props.onSelect()
    setActive(true)
  }
  const handleDeselect = () => {
    props.onDeselect()
    setActive(false)
  }

  return (
    <Wrapper>
      <ItemText selected={active} onClick={handleSelect}>
        {props.tier ? `Tier ${props.value}` : props.value}
      </ItemText>
      <RemoveIcon icon={faTimesCircle} selected={active} onClick={handleDeselect}/>
    </Wrapper>
    );
};

export default ItemSelector;
