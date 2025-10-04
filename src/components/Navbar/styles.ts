"use client";

import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "15px",
  flex: 1,
  backgroundColor: theme.palette.background.paper,
}));
