
import { faAngleDoubleLeft, faAngleDoubleRight, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import PaginationItem from './PaginationItem';

interface IPagination {
  totalPages: number,
  currentPage: number,
  handlePreviousPage: (e: React.MouseEvent<HTMLDivElement>) => void,
  handleNextPage: (e: React.MouseEvent<HTMLDivElement>) => void,
  handleFirstPage: (e: React.MouseEvent<HTMLDivElement>) => void,
  handleLastPage: (e: React.MouseEvent<HTMLDivElement>) => void
}

const Wrapper = styled.div`
  display: flex;
  grid-area: pagination;
`;

const Pagination: React.FC<IPagination> = (props) => {

  return (
    <Wrapper>
      <PaginationItem
        isDisabled={props.currentPage === 1}
        onClick={props.handleFirstPage}
      >
        <FontAwesomeIcon icon={faAngleDoubleLeft}/>
      </PaginationItem>
      <PaginationItem
        isDisabled={props.currentPage === 1}
        onClick={props.handlePreviousPage}
      >
        <FontAwesomeIcon icon={faAngleLeft}/>
      </PaginationItem>
      <PaginationItem isActive>
        {props.currentPage}
      </PaginationItem>
      <PaginationItem
        isDisabled={props.currentPage === props.totalPages||props.totalPages ===1}
        onClick={props.handleNextPage}
      >
        <FontAwesomeIcon icon={faAngleRight}/>
      </PaginationItem>
      <PaginationItem
        isDisabled={props.currentPage === props.totalPages||props.totalPages ===1}
        onClick={props.handleLastPage}
      >
        <FontAwesomeIcon icon={faAngleDoubleRight}/>
      </PaginationItem>
    </Wrapper>
  );
};

export default Pagination;
