"use client";

import React, { ChangeEvent } from "react";
import { InputAdornment } from "@mui/material";
import { Wrapper, Label, RequiredText, StyledTextField } from "./styles";

interface Props {
  label?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  isRequired?: boolean;
  isInvalid?: boolean;
  errorMessage?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export default function LabeledInput({
  label,
  value,
  onChange,
  type = "text",
  placeholder = "",
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

      <StyledTextField
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        fullWidth
        error={isInvalid}
        helperText={isInvalid ? errorMessage : ""}
        variant="outlined"
        size="small"
        InputProps={{
          startAdornment: leftIcon ? (
            <InputAdornment position="start">{leftIcon}</InputAdornment>
          ) : undefined,
          endAdornment: rightIcon ? (
            <InputAdornment position="end">{rightIcon}</InputAdornment>
          ) : undefined,
        }}
        {...otherProps}
      />
    </Wrapper>
  );
}
