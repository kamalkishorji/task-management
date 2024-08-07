import React from "react";
import { Select, MenuItem, FormHelperText, FormControl } from "@mui/material/";
import { Controller } from "react-hook-form";
import "./style.css";
const SingleCustomSelect = ({
  label,
  control,
  valueKey,
  labelKey,
  name,
  options,
  disabled,
  rules,
  onChange,
}) => {
  return (
    <FormControl fullWidth>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        rules={rules}
        render={({
          field: { onChange: fieldOnChange, value },
          fieldState: { error },
          formState,
        }) => (
          <>
            <span>{label}</span>
            <Select
              className={"input-custom-white input-custom"}
              onChange={(e) => {
                fieldOnChange(e);
                onChange && onChange(e.target.value);
                // onChange(e);
              }}
              value={value}
              size="small"
              disabled={disabled}
            >
              {(options || []).map((option, index) => {
                return (
                  <MenuItem
                    value={valueKey ? option[valueKey] : option}
                    key={index}
                    className="menu-item-dropdown-item"
                  >
                    {labelKey ? option[labelKey] : option}
                  </MenuItem>
                );
              })}
            </Select>
            {error?.message && (
              <FormHelperText sx={{ color: "red" }}>
                {error.message}
              </FormHelperText>
            )}
          </>
        )}
      />
    </FormControl>
  );
};

export default SingleCustomSelect;
