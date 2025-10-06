"use client";

import React from "react";
import {
  TextField,
  MenuItem,
  InputAdornment,
  TextFieldProps,
} from "@mui/material";
import { Label, RequiredText, Wrapper } from "./styles";

interface Option {
  label: string;
  value: string | number;
}

interface Props extends Omit<TextFieldProps, "onChange"> {
  label?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  options?: Option[];
  placeholder?: string;
  isRequired?: boolean;
  isInvalid?: boolean;
  errorMessage?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export default function LabeledSelect({
  label,
  value,
  onChange,
  options = [],
  placeholder = "Selecione uma opção...",
  isRequired = false,
  isInvalid = false,
  errorMessage = "",
  leftIcon = null,
  rightIcon = null,
  ...otherProps
}: Props) {
  return (
    <Wrapper>
      {label && (
        <Label>
          {label} {isRequired && <RequiredText>(Obrigatório)</RequiredText>}
        </Label>
      )}

      <TextField
        select
        value={value}
        onChange={onChange}
        fullWidth
        size="small"
        variant="outlined"
        error={isInvalid}
        helperText={isInvalid ? errorMessage : ""}
        InputProps={{
          startAdornment: leftIcon ? (
            <InputAdornment position="start">{leftIcon}</InputAdornment>
          ) : undefined,
          endAdornment: rightIcon ? (
            <InputAdornment position="end">{rightIcon}</InputAdornment>
          ) : undefined,
        }}
        {...otherProps}
      >
        <MenuItem value="" disabled>
          {placeholder}
        </MenuItem>
        {options.map((opt) => (
          <MenuItem key={opt.value} value={opt.value}>
            {opt.label}
          </MenuItem>
        ))}
      </TextField>
    </Wrapper>
  );
}
