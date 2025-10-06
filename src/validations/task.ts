import * as yup from "yup";

export const taskSchema = yup.object({
  title: yup.string().required("O título é obrigatório"),
  description: yup.string().required("A descrição é obrigatória"),
  priority: yup
    .string()
    .oneOf(["low", "medium", "high"], "Selecione uma prioridade válida")
    .required("A prioridade é obrigatória"),
  status: yup
    .string()
    .oneOf(["pending", "inProgress", "done"], "Selecione um status válido")
    .required("O status é obrigatório"),
});

export type TaskSchemaType = yup.InferType<typeof taskSchema>;
