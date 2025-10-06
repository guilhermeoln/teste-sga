"use client";

import React from "react";
import {
  Box,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Skeleton,
  Typography,
  IconButton,
  TableSortLabel,
} from "@mui/material";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";
import useContainer from "./useContainer";
import { PageNumberBox, PaginationWrapper, TableWrapper } from "./styles";

export interface Column<T> {
  key: keyof T;
  label: string;
  align?: "left" | "center" | "right";
  width?: string | number;
  render?: (row: T, rowIndex: number) => React.ReactNode;
  sortable?: boolean;
}

export interface CustomTableProps<T> {
  columns?: Column<T>[];
  data?: T[];
  emptyMessage?: string;
  rowClick?: (row: T) => void;
  isLoading?: boolean;
  rowsPerPage?: number;
}

export default function CustomTable<T>({
  columns = [],
  data = [],
  emptyMessage = "Nada por aqui ainda...",
  rowClick,
  isLoading = false,
  rowsPerPage = 5,
}: CustomTableProps<T>) {
  const {
    currentData,
    handleNextPage,
    handlePrevPage,
    skeletonRows,
    handleSort,
    sortConfig,
    currentPage,
    totalPages,
  } = useContainer<T>({ rowsPerPage, data });

  return (
    <TableWrapper>
      <Table size="small">
        <TableHead>
          <TableRow>
            {columns.map((col, colIndex) => {
              const isActive = sortConfig.key === col.key;

              return (
                <TableCell
                  key={colIndex}
                  align={col.align || "left"}
                  sx={{
                    padding: "15px",
                    width: col.width || "auto",
                    cursor: col.sortable ? "pointer" : "default",
                  }}
                  onClick={col.sortable ? () => handleSort(col.key) : undefined}
                >
                  {col.sortable ? (
                    <TableSortLabel
                      active={isActive}
                      direction={
                        isActive && sortConfig.order ? sortConfig.order : "asc"
                      }
                      hideSortIcon={!isActive}
                    >
                      {col.label}
                    </TableSortLabel>
                  ) : (
                    col.label
                  )}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>

        <TableBody>
          {isLoading ? (
            skeletonRows.map((_, rowIndex) => (
              <TableRow key={rowIndex}>
                {columns.map((_, colIndex) => (
                  <TableCell key={colIndex} sx={{ padding: "15px" }}>
                    <Skeleton height={20} />
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : data.length === 0 ? (
            <TableRow>
              <TableCell colSpan={columns.length}>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  py={5}
                  gap={5}
                >
                  <Typography fontWeight={600} variant="h2">
                    {emptyMessage}
                  </Typography>
                </Box>
              </TableCell>
            </TableRow>
          ) : (
            currentData.map((row, rowIndex) => (
              <TableRow
                key={rowIndex}
                hover={!!rowClick}
                onClick={() => rowClick?.(row)}
                sx={{
                  cursor: rowClick ? "pointer" : "default",
                }}
              >
                {columns.map((col, colIndex) => (
                  <TableCell
                    key={colIndex}
                    align={col.align || "left"}
                    sx={{ padding: "15px" }}
                  >
                    {col.render
                      ? col.render(row, rowIndex) ?? "-"
                      : (row[col.key] as React.ReactNode) ?? "-"}
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>

      {!isLoading && data.length > rowsPerPage && (
        <PaginationWrapper>
          <IconButton
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            sx={{ padding: 0, height: 25 }}
          >
            <MdArrowLeft color="black" />
          </IconButton>

          <PageNumberBox>
            <Typography color="black">{currentPage}</Typography>
          </PageNumberBox>

          <IconButton
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            sx={{ padding: 0, height: 25 }}
          >
            <MdArrowRight color="black" />
          </IconButton>
        </PaginationWrapper>
      )}
    </TableWrapper>
  );
}
