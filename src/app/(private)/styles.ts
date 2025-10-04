"use client";

import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const LayoutWrapper = styled(Box)({
  display: "flex",
  width: "100%",
  minHeight: "100vh",
});

export const NavbarWrapper = styled(Box)({
  display: "flex",
  flex: 0.15,
});

export const ChildrenWrapper = styled(Box)({
  display: "flex",
  flex: 0.85,
  padding: "15px",
});
