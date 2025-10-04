import * as yup from "yup";

const loginSchema = yup.object({
  username: yup.string().required("O usuário é obrigatório"),
  password: yup.string().required("A senha é obrigatória"),
});

export default loginSchema;
