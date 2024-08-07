import React from "react";
import "./button.css";
import Button from "@mui/material/Button";
export default function CustomButton({
  title,
  ICON,
  handleButtonClick,
  isLight,
  isDelete,
  disabled,
  isFullWidth,
  ENDICON,
  variant,
  type,
}) {
  let className = "button-custom";
  if (isLight) {
    className = "button-custom-light";
  } else if (isDelete) {
    className = "button-custom-delete";
  }
  return (
    <Button
      disabled={disabled || false}
      className={disabled ? "button-custom-disabled" : className}
      type={type || ""}
      fullWidth={isFullWidth || false}
      variant={variant || "outlined"}
      startIcon={ICON || null}
      endIcon={ENDICON || null}
      onClick={() => (handleButtonClick ? handleButtonClick() : () => {})}
    >
      {title}
    </Button>
  );
}
