"use client";

import { Column } from "@/components/CustomTable";
import { formatDate } from "@/lib/date";
import useLogStore from "@/store/useLogStore";
import { Log } from "@/types";
import { Typography } from "@mui/material";

export default function useContainer() {
  const { logs } = useLogStore();

  const columns: Column<Log>[] = [
    { key: "user", label: "Usuário" },
    {
      key: "action",
      label: "Ação",
    },
    {
      key: "createdAt",
      label: "Data",
      sortable: true,
      render: (row: Log) => (
        <Typography variant="body2">{formatDate(row.createdAt)}</Typography>
      ),
    },
  ];

  return {
    columns,
    logs,
  };
}
