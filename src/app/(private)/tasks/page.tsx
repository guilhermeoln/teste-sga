"use client";

import CustomTable from "@/components/CustomTable";
import { Task } from "@/types";
import useContainer from "./useContainer";
import { Box, Button, Dialog, DialogTitle } from "@mui/material";
import { IoAddCircle } from "react-icons/io5";
import LabeledInput from "@/components/LabeledInput";
import { Form, Wrapper } from "./styles";
import { TaskSchemaType } from "@/validations/task";
import LabeledSelect from "@/components/LabeledSelect";
import { ChangeEvent, useEffect } from "react";

type TaskDialogProps = {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: Omit<TaskSchemaType, "createdAt">) => void;
  initialData?: Task | null;
};

const TaskModal = ({
  open,
  onClose,
  onSubmit,
  initialData,
}: TaskDialogProps) => {
  const { register, setValue, errors, handleSubmit, watch } = useContainer();

  useEffect(() => {
    if (initialData) {
      setValue("title", initialData.title);
      setValue("description", initialData.description);
      setValue("status", initialData.status);
      setValue("priority", initialData.priority);
    }
  }, [initialData, setValue]);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        {initialData ? "Editar Tarefa" : "Criar Nova Tarefa"}
      </DialogTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <LabeledInput
          {...register("title")}
          label="Título"
          placeholder="Digite o título da tarefa"
          isInvalid={!!errors.title}
          errorMessage={errors.title?.message}
          isRequired
        />
        <LabeledInput
          {...register("description")}
          label="Descrição"
          placeholder="Digite a descrição da tarefa"
          isInvalid={!!errors.description}
          errorMessage={errors.description?.message}
          isRequired
        />
        <LabeledSelect
          {...register("status")}
          label="Status"
          value={watch("status")}
          options={[
            { value: "pending", label: "Pendente" },
            { value: "inProgress", label: "Em Progresso" },
            { value: "done", label: "Concluída" },
          ]}
          isInvalid={!!errors.status}
          errorMessage={errors.status?.message}
          isRequired
        />
        <LabeledSelect
          {...register("priority")}
          label="Prioridade"
          options={[
            { value: "low", label: "Baixa" },
            { value: "medium", label: "Média" },
            { value: "high", label: "Alta" },
          ]}
          value={watch("priority")}
          isInvalid={!!errors.priority}
          errorMessage={errors.priority?.message}
          isRequired
        />
        <Button variant="contained" type="submit">
          Criar
        </Button>
      </Form>
    </Dialog>
  );
};

export default function Tasks() {
  const {
    columns,
    tasks,
    isOpen,
    onClose,
    onOpen,
    search,
    setSearch,
    selectedTask,
    handleSave,
  } = useContainer();

  return (
    <Wrapper>
      <Box width="250px">
        <Button
          variant="contained"
          startIcon={<IoAddCircle />}
          onClick={onOpen}
        >
          Criar Tarefa
        </Button>
      </Box>
      <Box width="250px">
        <LabeledInput
          value={search}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
          placeholder="Filtrar por..."
        />
      </Box>
      <CustomTable<Task>
        columns={columns}
        data={tasks}
        rowsPerPage={5}
        emptyMessage="Nenhuma tarefa encontrada"
      />
      <TaskModal
        onClose={onClose}
        open={isOpen}
        onSubmit={handleSave}
        initialData={selectedTask}
      />
    </Wrapper>
  );
}
