"use client";

import useFormValidation from "@/hooks/useFormValidation";
import { setCache } from "@/services/cache";
import login from "@/services/serverActions/login";
import { CacheKeysEnum } from "@/types";
import loginSchema from "@/validations/login";
import { useRouter } from "next/navigation";

type LoginProps = {
  username: string;
  password: string;
};

export default function useContainer() {
  const { errors, handleSubmit, register } = useFormValidation({
    validationSchema: loginSchema,
  });

  const router = useRouter();

  const handleLogin = async (data: LoginProps) => {
    await login(data)
      .then((response) => {
        setCache(CacheKeysEnum.USER, response.data.username);
        router.push("/tasks");
      })
      .catch((error) => console.log(error));
  };

  return {
    errors,
    handleSubmit,
    register,
    handleLogin,
  };
}
