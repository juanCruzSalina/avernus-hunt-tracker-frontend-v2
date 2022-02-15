import React from 'react'
import styled from 'styled-components';
import { usePagination } from '../../../hooks/usePagination.hook';
import Pagination from '../Pagination/Pagination';
import TableHeader from './TableHeader';
import TableItem from './TableItem';

export interface WishlistType {
  date: string,
  tier: 1 | 2 | 3,
  item: string,
  isMain: boolean,
  name: string
}

export interface AwardedType {
  date: string,
  tier: 1 | 2 | 3,
  item: string,
  isMain: boolean,
  hasDonated: boolean
  name: string
}

export interface DonationType {
  date: string,
  tier: '1' | '2' | '3',
  type: 'Lure' | 'Trophy',
  item: string,
  amount: number
  donator: string[]
}

interface ITable {
  items: (AwardedType | DonationType | WishlistType)[]
  type: 'wishlist' | 'donation' | 'awarded'
}

const Wrapper = styled.div`
  width: 97.5%;
  height: 97.5%;
  display: grid;
  grid-template:
  [row1-start]'table' auto [row1-end]
  [row1-start]'pagination' ${props => props.theme.measures.l} [row1-end]
  / 100%;
  place-items: center;
  `;

const TableContainer = styled.table`
  border: ${props => props.theme.colors['grey-400']} 1px solid;
  width: 100%;
  height: 100%;
  grid-area: table;
`;

const DataContainer = styled.tbody`
  width: 100%;
  height: 100%;
`;

const EmptyRow = styled.tr`
  width: 100%;
  height: auto;
`;

const Table: React.FC<ITable> = (props) => {

  const { currentItems,
          totalPages,
          currentPage,
          handleNextPage,
          handlePreviousPage,
          handleFirstPage,
          handleLastPage } = usePagination(props.items);


  return (
    <Wrapper>
      <TableContainer>
        <thead>
          <TableHeader type={props.type}/>
        </thead>
        <DataContainer>
          {currentItems.map((entry: WishlistType | AwardedType | DonationType, idx: number) => <TableItem key={idx} item={entry} index={idx} />)}
          {currentItems.length < 10 && <EmptyRow />}
        </DataContainer>
      </TableContainer>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handleFirstPage={handleFirstPage}
        handleLastPage={handleLastPage}
      />
    </Wrapper>
  )
}

export default Table
