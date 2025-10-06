"use client";

import { styled } from "@mui/material/styles";
import { TextField, Box, Typography } from "@mui/material";

export const Wrapper = styled(Box)({
  width: "100%",
});

export const Label = styled(Typography)(({ theme }) => ({
  marginBottom: "5px",
  fontSize: theme.typography.body2.fontSize,
  fontWeight: 600,
}));

export const RequiredText = styled("span")(({ theme }) => ({
  fontWeight: 400,
  fontSize: theme.typography.subtitle1.fontSize,
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: theme.shape.borderRadius,
  },
}));
