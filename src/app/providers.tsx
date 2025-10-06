"use client";

import theme from "@/theme";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      {children}
    </ThemeProvider>
  );
}
