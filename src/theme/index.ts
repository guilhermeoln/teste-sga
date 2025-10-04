import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000ff",
    },
    secondary: {
      main: "#ff4081",
    },
    background: {
      default: "#fff",
      paper: "#F6F4F1",
    },
    text: {
      primary: "#333",
      secondary: "#666",
    },
  },
  typography: {
    fontFamily: "Montserrat, sans-serif",
    h1: {
      fontSize: "26px",
      fontWeight: 700,
    },
    h2: {
      fontSize: "18px",
      fontWeight: 600,
    },
    body1: {
      fontSize: "16px",
    },
    body2: {
      fontSize: "14px",
    },
    subtitle1: {
      fontSize: "12px",
    },
  },
  shape: {
    borderRadius: 8,
  },
});

export default theme;
