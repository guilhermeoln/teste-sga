"use client";

import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  backgroundColor: theme.palette.background.paper,
}));

export const NavItemWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isActive",
})<{ isActive: boolean }>(({ theme, isActive }) => ({
  display: "flex",
  width: "100%",
  padding: "12px",
  borderRadius: "5px",
  backgroundColor: isActive ? theme.palette.common.black : "transparent",
  cursor: "pointer",
  gap: "15px",
  alignItems: "center",
  justifyContent: "flex-start",
  transition: "background-color 0.2s ease",

  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
  },
}));

export const NavItemLabel = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "isActive",
})<{ isActive: boolean }>(({ theme, isActive }) => ({
  color: isActive ? theme.palette.common.white : theme.palette.common.black,
  fontWeight: 500,
  display: "flex",

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
