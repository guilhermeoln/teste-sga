import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Wrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
});

export const Form = styled("form")({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  padding: "20px",
  gap: "10px",
});
