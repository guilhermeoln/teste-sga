import { Column } from "@/components/CustomTable";
import { Task } from "@/types";
import { Box, Button } from "@mui/material";
import { CiEdit, CiTrash } from "react-icons/ci";

export default function useContainer() {
  const tasks: Task[] = [
    {
      id: 1,
      title: "Tarefa 1",
      description: "Descrição da tarefa 1",
      priority: "high",
      status: "pending",
    },
    {
      id: 2,
      title: "Tarefa 2",
      description: "Descrição da tarefa 2",
      priority: "medium",
      status: "inProgress",
    },
  ];

  const columns: Column<Task>[] = [
    { key: "title", label: "Título" },
    { key: "description", label: "Descrição" },
    { key: "priority", label: "Prioridade", align: "center" },
    { key: "status", label: "Status", align: "center" },
    {
      key: "id",
      label: "Ações",
      align: "center",
      render: (row: Task) => {
        return (
          <Box display="flex" justifyContent="center" gap="10px">
            <Button variant="contained" color="primary">
              <CiEdit />
            </Button>
            <Button variant="contained" color="error">
              <CiTrash />
            </Button>
          </Box>
        );
      },
    },
  ];

  return {
    columns,
    tasks,
  };
}
