"use client";

import theme from "@/theme";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
