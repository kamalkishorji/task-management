import React, { useState } from "react";
import {
  TextField,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Controller } from "react-hook-form";
import { FormHelperText } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
const FormInputText = ({
  name,
  control,
  label,
  type = "text",
  // showPasswordToggle = false,
  rules,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      rules={rules}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <>
          <Typography component="span">{label}</Typography>

          <TextField
            className="custom-input-box"
            size="small"
            sx={{ background: "white" }}
            error={!!error}
            onChange={onChange}
            value={value}
            fullWidth
            type={type === "password" && !showPassword ? "password" : "text"}
            InputProps={
              type === "password"
                ? {
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleTogglePasswordVisibility}
                          edge="end"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }
                : null
            }
          />

          {error?.message && (
            <FormHelperText sx={{ color: "red" }}>
              {error.message}
            </FormHelperText>
          )}
        </>
      )}
    />
  );
};

export default FormInputText;
