"use client";

import { Column } from "@/components/CustomTable";
import { useDisclosure } from "@/hooks/useDisclosure";
import useFormValidation from "@/hooks/useFormValidation";
import useTaskStore from "@/store/useTaskStore";
import { Task } from "@/types";
import { taskSchema } from "@/validations/task";
import { Box, Button, Typography } from "@mui/material";
import { useMemo, useState } from "react";
import { CiEdit, CiTrash } from "react-icons/ci";
import { toast } from "react-toastify";

const statusDictionary = {
  pending: "Pendente",
  inProgress: "Em Progresso",
  done: "Concluída",
};

const priorityDictionary = {
  low: "Pendente",
  medium: "Média",
  high: "Alta",
};

export default function useContainer() {
  const [search, setSearch] = useState("");

  const { tasks, addTask, deleteTask } = useTaskStore();

  const { errors, handleSubmit, register, setValue, reset } = useFormValidation(
    {
      validationSchema: taskSchema,
    }
  );

  const { isOpen, onOpen, onClose } = useDisclosure();

  const columns: Column<Task>[] = [
    { key: "title", label: "Título" },
    {
      key: "description",
      label: "Descrição",
    },
    {
      key: "priority",
      label: "Prioridade",
      align: "center",
      sortable: true,
      render: (row: Task) => (
        <Typography variant="body2">
          {priorityDictionary[row.priority]}
        </Typography>
      ),
    },
    {
      key: "status",
      label: "Status",
      align: "center",
      sortable: true,
      render: (row: Task) => (
        <Typography variant="body2">{statusDictionary[row.status]}</Typography>
      ),
    },
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
            <Button
              variant="contained"
              color="error"
              onClick={() => {
                deleteTask(row.id);
                toast.success("Tarefa excluida com sucesso!");
              }}
            >
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
    toast.success("Tarefa criada com sucesso!");
    reset({});
  };

  const filteredTasks = useMemo(() => {
    let filterResult = tasks;

    if (search) {
      const searchLower = search.toLowerCase();
      filterResult = filterResult.filter((item) => {
        const titleMatch = item.title.toLowerCase().includes(searchLower);
        const descriptionMatch = item.description
          .toLowerCase()
          .includes(searchLower);
        const statusMatch = statusDictionary[item.status]
          ?.toLowerCase()
          .includes(searchLower);
        const priorityMatch = priorityDictionary[item.priority]
          ?.toLowerCase()
          .includes(searchLower);

        return titleMatch || descriptionMatch || statusMatch || priorityMatch;
      });
    }

    return filterResult;
  }, [search, tasks]);

  return {
    columns,
    tasks: filteredTasks,
    errors,
    handleSubmit,
    register,
    setValue,
    isOpen,
    onClose,
    onOpen,
    createTask,
    search,
    setSearch,
  };
}
