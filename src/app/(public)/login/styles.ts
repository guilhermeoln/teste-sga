"use client";

import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  width: "100%",
  padding: "15px",
  backgroundColor: theme.palette.background.paper,
  gap: "40px",
}));

export const Form = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  minWidth: "350px",
  padding: "30px",
  backgroundColor: theme.palette.background.default,
  borderRadius: theme.shape.borderRadius,
  border: "1px solid #D7D7D7",
}));
