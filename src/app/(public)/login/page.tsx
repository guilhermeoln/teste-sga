"use client";

import LabeledInput from "@/components/LabeledInput";
import { Form, Wrapper } from "./styles";
import { Button } from "@mui/material";
import Image from "next/image";
import useContainer from "./useContainer";
import { CiLock, CiUser } from "react-icons/ci";

export default function Login() {
  const { register, errors, handleSubmit, handleLogin } = useContainer();

  return (
    <Wrapper>
      <Image src="/images/logo.png" alt="logo" width={60} height={50} />
      <Form onSubmit={handleSubmit(handleLogin)}>
        <LabeledInput
          {...register("username")}
          label="Usuário"
          placeholder="Digite o seu usuário"
          leftIcon={<CiUser />}
          isInvalid={!!errors?.username}
          errorMessage={errors?.username?.message}
          isRequired
        />
        <LabeledInput
          type="password"
          {...register("password")}
          label="Senha"
          placeholder="Digite a sua senha"
          leftIcon={<CiLock />}
          isInvalid={!!errors?.password}
          errorMessage={errors?.password?.message}
          isRequired
        />
        <Button variant="contained" type="submit">
          Entrar
        </Button>
      </Form>
    </Wrapper>
  );
}
