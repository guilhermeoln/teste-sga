import { Column } from "@/components/CustomTable";
import useTaskStore from "@/store/useTaskStore";
import { Task } from "@/types";
import { Box, Button } from "@mui/material";
import { CiEdit, CiTrash } from "react-icons/ci";

export default function useContainer() {
  const { tasks } = useTaskStore();

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
