"use client";

import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const LayoutWrapper = styled(Box)({
  display: "flex",
  width: "100%",
  minHeight: "100vh",
});

export const NavbarWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flex: 0.15,

  [theme.breakpoints.down("md")]: {
    flex: 0.1,
  },
}));

export const ChildrenWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flex: 0.85,
  padding: "15px",

  [theme.breakpoints.down("md")]: {
    flex: 0.9,
  },
}));
