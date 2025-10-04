"use client";

import CustomTable from "@/components/CustomTable";
import { Task } from "@/types";
import useContainer from "./useContainer";
import { Button } from "@mui/material";
import { IoAddCircle } from "react-icons/io5";

export default function Tasks() {
  const { columns, tasks } = useContainer();

  return (
    <>
      <Button variant="contained" startIcon={<IoAddCircle />}>
        Criar Tarefa
      </Button>
      <CustomTable<Task>
        columns={columns}
        data={tasks}
        rowsPerPage={5}
        emptyMessage="Nenhuma tarefa encontrada"
      />
    </>
  );
}
