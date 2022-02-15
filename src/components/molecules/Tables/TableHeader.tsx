import React from 'react'
import styled from 'styled-components';
import { rgba } from 'polished';

import Text from '../../atoms/Text/Text';
import { useAppSelector } from '../../../app/hooks';
import { headerOptions } from '../../../features/tableHeader/tableHeaderSlice'

interface ITableHeader {
  type: 'wishlist' | 'donation' | 'awarded'
}

const Wrapper = styled.tr`
  width: 100%;
  height: ${props => props.theme.measures.m};
  grid-area: header;
  display: table-row;
  background-color: ${props => rgba( props.theme.colors.primary, 0.8 )};
`;

const HeaderItem = styled.th`
  text-align: left;
  display: table-cell;
  padding: ${props => props.theme.fontSizes.s} ${props => props.theme.spacing.xxs};
`;


const TableHeader: React.FC<ITableHeader> = ({ type }) => {

  const { awarded, donation, wishlist } = useAppSelector(headerOptions)
  const headers: any = {
    awarded: awarded.map((item, idx) =>
        <HeaderItem key={idx}>
          <Text size='m' isLight>
            {item}
          </Text>
        </HeaderItem>
    ),
    donation: donation.map((item, idx) =>
        <HeaderItem key={idx}>
          <Text size='m' isLight>
            {item}
          </Text>
        </HeaderItem>
    ),
    wishlist: wishlist.map((item, idx) =>
        <HeaderItem key={idx}>
          <Text size='m' isLight>
            {item}
          </Text>
        </HeaderItem>
    ),
  }

  return (
    <Wrapper>
      {headers[type]}
    </Wrapper>
  )
}

export default TableHeader
