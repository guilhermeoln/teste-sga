import useFormValidation from "@/hooks/useFormValidation";
import loginSchema from "@/validations/login";

type LoginProps = {
  username: string;
  password: string;
};

export default function useContainer() {
  const { errors, handleSubmit, register } = useFormValidation({
    validationSchema: loginSchema,
  });

  const handleLogin = (data: LoginProps) => {
    console.log("data", data);
  };

  return {
    errors,
    handleSubmit,
    register,
    handleLogin,
  };
}
