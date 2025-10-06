import { useMemo, useState } from "react";

export type SortOrder = "asc" | "desc" | null;

interface UseContainerParams<T> {
  rowsPerPage: number;
  data: T[];
}

interface UseContainerReturn<T> {
  skeletonRows: unknown[];
  currentData: T[];
  handlePrevPage: () => void;
  handleNextPage: () => void;
  handleSort: (key: keyof T) => void;
  currentPage: number;
  totalPages: number;
  sortConfig: { key: keyof T | null; order: SortOrder };
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T): number {
  const aValue = a[orderBy];
  const bValue = b[orderBy];

  if (bValue === null && aValue === null) return 0;
  if (bValue === null) return -1;
  if (aValue === null) return 1;

  if (typeof bValue === "string" && typeof aValue === "string") {
    return bValue.localeCompare(aValue);
  }
  if (typeof bValue === "number" && typeof aValue === "number") {
    return bValue - aValue;
  }
  if (typeof bValue === "boolean" && typeof aValue === "boolean") {
    return Number(bValue) - Number(aValue);
  }

  return 0;
}

function getComparator<T>(
  order: Exclude<SortOrder, null>,
  orderBy: keyof T
): (a: T, b: T) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
): T[] {
  const stabilized: Array<[T, number]> = array.map((el, index) => [el, index]);
  stabilized.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilized.map(([el]) => el);
}

export default function useContainer<T>({
  rowsPerPage,
  data,
}: UseContainerParams<T>): UseContainerReturn<T> {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof T | null;
    order: SortOrder;
  }>({ key: null, order: null });

  const totalPages = Math.ceil(data.length / rowsPerPage);
  const skeletonRows = Array.from({ length: 5 });

  const handleSort = (key: keyof T) => {
    setSortConfig((prev) => {
      if (prev.key === key) {
        if (prev.order === "asc") return { key, order: "desc" };
        if (prev.order === "desc") return { key: null, order: null };
        return { key, order: "asc" };
      }
      return { key, order: "asc" };
    });
    setCurrentPage(1);
  };

  const sortedData = useMemo(() => {
    if (!sortConfig.key || !sortConfig.order) return data;
    const comparator = getComparator(sortConfig.order, sortConfig.key);
    return stableSort(data, comparator);
  }, [data, sortConfig]);

  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentData = sortedData.slice(startIndex, startIndex + rowsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  return {
    skeletonRows,
    currentData,
    handlePrevPage,
    handleNextPage,
    handleSort,
    currentPage,
    totalPages,
    sortConfig,
  };
}
