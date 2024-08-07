import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  Grid,
} from "@mui/material/";
import ButtonCustom from "../common/button";
import { useForm } from "react-hook-form";
import SingleCustomSelect from "../common/hookForm/singleSelect";
import FormInputText from "../common/hookForm/textInput";
import { VALIDATION_REGEX, TASK_STATUS } from "../../../src/config";
export default function EditTask({ open, handleSave, handleClose, task }) {
  const { handleSubmit, control, setValue } = useForm({});

  useEffect(() => {
    if (task) {
      setValue("title", task.title);
      setValue("description", task.description);
      setValue("status", task.status);
    }
  }, [task, setValue]);
  const handleModalInfoSave = (data) => {
    handleSave(data);
  };
  const renderActionButtons = () => {
    return (
      <>
        <div className="flex-row-justify-center-container">
          <DialogActions>
            <ButtonCustom
              isLight
              title="Cancel"
              handleButtonClick={handleClose}
            />
            <ButtonCustom
              title="Add"
              handleButtonClick={handleSubmit(handleModalInfoSave)}
            />
          </DialogActions>
        </div>
      </>
    );
  };
  return (
    <div>
      <Dialog fullWidth maxWidth="sm" open={open} onClose={handleClose}>
        <DialogTitle className="dialog-title-container">Edit task</DialogTitle>
        <DialogContent>
          <br />
          <Grid item xs={12}>
            <FormInputText
              name={`title`}
              control={control}
              label={"Title*"}
              rules={{
                required: "Please provide valid title",
                pattern: {
                  value: VALIDATION_REGEX.resourceName,
                  message: "Please provide valid title",
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <FormInputText
              name={`description`}
              control={control}
              label={"Description*"}
              rules={{
                required: "Please provide valid description",
                pattern: {
                  value: VALIDATION_REGEX.resourceName,
                  message: "Please provide valid description",
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <SingleCustomSelect
              name={`status`}
              control={control}
              label={"Status*"}
              rules={{
                required: "Please provide valid status",
              }}
              options={TASK_STATUS}
            />
          </Grid>
        </DialogContent>
        {renderActionButtons()}
      </Dialog>
    </div>
  );
}
