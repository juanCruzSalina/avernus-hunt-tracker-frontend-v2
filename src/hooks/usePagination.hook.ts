import { useEffect, useState } from "react";
import { WishlistType, AwardedType, DonationType } from "../components/molecules/Tables/Table";

export const usePagination = (items: (WishlistType | AwardedType | DonationType)[]) => {

  const displayedItems = 10;
  const [currentItems, setCurrentItems] = useState<(WishlistType | AwardedType | DonationType)[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [indexFirstItem, setIndexFirstItem] = useState(0);
  const totalPages = Math.ceil(items.length/displayedItems)
  const indexLastItem = indexFirstItem + displayedItems;

  useEffect(() => {
    setCurrentItems(items.slice(indexFirstItem, indexLastItem))
    setCurrentPage(Math.ceil(indexLastItem/displayedItems))
  }, [indexFirstItem]);

  const handleNextPage = () => {
    setIndexFirstItem(indexFirstItem + displayedItems)
  }

  const handlePreviousPage = () => {
    setIndexFirstItem(indexFirstItem - displayedItems)
  }

  const handleFirstPage = () => {
    setIndexFirstItem(0)
  }

  const handleLastPage = () => {
    setIndexFirstItem(Math.floor(items.length/displayedItems) * displayedItems)
  }


  return {
    totalPages,
    currentItems,
    indexFirstItem,
    currentPage,
    handleNextPage,
    handlePreviousPage,
    handleFirstPage,
    handleLastPage
  }
}