import { Column } from "@/components/CustomTable";
import { useDisclosure } from "@/hooks/useDisclosure";
import useFormValidation from "@/hooks/useFormValidation";
import useTaskStore from "@/store/useTaskStore";
import { Task } from "@/types";
import { taskSchema } from "@/validations/task";
import { Box, Button } from "@mui/material";
import { CiEdit, CiTrash } from "react-icons/ci";

export default function useContainer() {
  const { tasks, addTask } = useTaskStore();

  const { errors, handleSubmit, register, setValue, reset } = useFormValidation(
    {
      validationSchema: taskSchema,
    }
  );

  const { isOpen, onOpen, onClose } = useDisclosure();

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

  const createTask = (taskData: Omit<Task, "id">) => {
    addTask(taskData);
    onClose();
    reset({});
  };

  return {
    columns,
    tasks,
    errors,
    handleSubmit,
    register,
    setValue,
    isOpen,
    onClose,
    onOpen,
    createTask,
  };
}
