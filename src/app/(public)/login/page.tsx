"use client";

import LabeledInput from "@/components/LabeledInput";
import { Form, Wrapper } from "./styles";
import { useState } from "react";
import { Button } from "@mui/material";
import Image from "next/image";

export default function Login() {
  const [user, setUser] = useState("");

  return (
    <Wrapper>
      <Image src="/images/logo.png" alt="logo" width={60} height={50} />
      <Form>
        <LabeledInput
          value={user}
          onChange={(e) => setUser(e.target.value)}
          label="Usuário"
          placeholder="Digite o seu usuário"
          isRequired
        />
        <LabeledInput
          value={user}
          onChange={(e) => setUser(e.target.value)}
          label="Senha"
          placeholder="Digite a sua senha"
          isRequired
        />
        <Button variant="contained">Entrar</Button>
      </Form>
    </Wrapper>
  );
}
