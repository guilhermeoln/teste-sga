"use client";

import CustomTable from "@/components/CustomTable";
import { Task } from "@/types";
import useContainer from "./useContainer";

export default function Tasks() {
  const { columns, tasks } = useContainer();

  return (
    <CustomTable<Task>
      columns={columns}
      data={tasks}
      rowsPerPage={10}
      emptyMessage="Nenhuma tarefa encontrada"
    />
  );
}
