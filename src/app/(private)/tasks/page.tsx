"use client";

import CustomTable from "@/components/CustomTable";
import { Task } from "@/types";
import useContainer from "./useContainer";
import { Button, Dialog, DialogTitle } from "@mui/material";
import { IoAddCircle } from "react-icons/io5";
import LabeledInput from "@/components/LabeledInput";
import { Form } from "./styles";
import { TaskSchemaType } from "@/validations/task";
import LabeledSelect from "@/components/LabeledSelect";

type TaskDialogProps = {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: TaskSchemaType) => void;
  initialData?: Partial<Task>;
};

const TaskModal = ({
  open,
  onClose,
  onSubmit,
  initialData,
}: TaskDialogProps) => {
  const { register, setValue, errors, handleSubmit } = useContainer();

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
  const { columns, tasks, isOpen, onClose, createTask, onOpen } =
    useContainer();

  return (
    <>
      <Button variant="contained" startIcon={<IoAddCircle />} onClick={onOpen}>
        Criar Tarefa
      </Button>
      <CustomTable<Task>
        columns={columns}
        data={tasks}
        rowsPerPage={5}
        emptyMessage="Nenhuma tarefa encontrada"
      />
      <TaskModal onClose={onClose} open={isOpen} onSubmit={createTask} />
    </>
  );
}
