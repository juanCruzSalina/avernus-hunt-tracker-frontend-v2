import React from 'react';
import styled from 'styled-components';

import { WishlistType ,AwardedType, DonationType } from './Table';
import Text from '../../atoms/Text/Text';


interface ITableItem {
  item: WishlistType | DonationType | AwardedType,
  index: number
}

const Wapper = styled.tr<Pick<ITableItem, 'index'>>`
  width: 100%;
  height: 10%;
  background-color: ${props => (props.index % 2) ? props.theme.colors['grey-600'] : props.theme.colors.light} ;
`;

const DataItem = styled.th`
  text-align: left;
  font-weight: 500;
  padding: ${props => props.theme.fontSizes.s} ${props => props.theme.spacing.xxs};
`;

const TableItem: React.FC<ITableItem> = (props) => {

  return (
    <Wapper {...props}>
      {Object.values(props.item).map((value, idx) =>
        <DataItem key={idx}>
          <Text size='m'>
            {value}
          </Text>
        </DataItem>
        )
      }
    </Wapper>
  )
};

export default TableItem;
