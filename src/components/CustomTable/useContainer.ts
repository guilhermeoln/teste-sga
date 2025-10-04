import { useState } from "react";

interface UseContainerParams<T> {
  rowsPerPage: number;
  data: T[];
}

interface UseContainerReturn<T> {
  skeletonRows: unknown[];
  currentData: T[];
  handlePrevPage: () => void;
  handleNextPage: () => void;
  currentPage: number;
  totalPages: number;
}

export default function useContainer<T>({
  rowsPerPage,
  data,
}: UseContainerParams<T>): UseContainerReturn<T> {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const skeletonRows = Array.from({ length: 5 });

  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentData = data.slice(startIndex, startIndex + rowsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return {
    skeletonRows,
    currentData,
    handlePrevPage,
    handleNextPage,
    currentPage,
    totalPages,
  };
}
