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

export const RootWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flex: 0.85,
  overflow: "auto",

  [theme.breakpoints.down("md")]: {
    flex: 0.9,
  },
}));

export const ChildrenWrapper = styled(Box)({
  flex: 1,
  padding: "15px",
});

export const LayoutHeader = styled(Box)({
  display: "flex",
  alignItems: "center",
  width: "100%",
  padding: "15px",
  height: "80px",
});
