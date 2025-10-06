import { toast } from "react-toastify";

type LoginParams = {
  username: string;
  password: string;
};

const login = async (params: LoginParams) => {
  const response = await fetch("/api/login", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(params),
  });

  const data = await response.json();

  if (!response.ok) {
    toast.error(data.error);
    throw new Error(data.error);
  }

  return data;
};

export default login;
